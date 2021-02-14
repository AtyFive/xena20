import {useContext, useEffect, useState} from 'react'
import {projectStorage, firestore, timestamp} from '../../firebase';
import { UserContext } from "../../providers/UserProvider";

const useStorage = ({file, collectionName}) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const { user } = useContext(UserContext);
    const userString = user.uid;

    //logic as before in square brackets is the conndition that fires a useffect codes - in this case file change
    useEffect (() =>{
        //reference to storage (Storage, not Cloud Firestore)
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = firestore.collection('users').doc(userString).collection(collectionName);
        

        //upload progress - on change of state with periodic snapshots 
        storageRef.put(file).on(
            'state_changed', 
            (snap) =>{
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            },
            (err) => {
                setError(err);
            }, 
            async () => { //this get image url for further use after the image has uploaded
                const url = await storageRef.getDownloadURL();
                const createdAt = timestamp();
                collectionRef.add({ url, createdAt });
                //collectionRefTwo.add()
                setUrl(url);
            }
        )
    }, [file]);

    return {url, progress, error}

} 

export default useStorage