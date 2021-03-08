import React, {useContext, useEffect, useState} from 'react'
// import ImageGrid from './ImageGrid';
// import Modal from './Modal';
import UploadForm from '../archive/UploadForm';
import { UserContext } from "../../providers/UserProvider";
import '../newstyles.css';
import {firestore, auth} from '../../firebase';


function ArchiveMain(props) {
    const [images, setImages] = useState([]);
    
    // const { user } = useContext(UserContext);
    // const userString = user.uid;
    // const userString = props.myUser.uid;
    
    // const userRef = firestore.collection("users").doc(userString);
    const dingo = props.myTemp;
    
    const imageRefs = dingo.collection("imageUrlz");

    useEffect(() => {
        
        // console.log("Hello Archive", yolo);
        console.log("Hello temp", props.myTemp);
      }, []);
    
    useEffect(() => {
        imageRefs.onSnapshot(snapshot => {
            setImages(snapshot.docs.map(doc => ({
                id: doc.id,
                imageUrl: doc.data()
            })));
        })
    }, [images]); 

    return (
        <div>
            <div className = 'archiveImage'>       
                {images.map(({id, imageUrl}) => (
                    //adding key allows to rerender only the post we need, not all of them
                    <img key = {id} src = {imageUrl.url} alt = "XENA"/>  
                )) }  
                
            </div>
            <UploadForm />
        </div>

    )   
}

export default ArchiveMain;






















// // const {photoURL, displayName, email, imageUrls} = user;

// const userRef = firestore.collection("users").doc("o6o25nCSMvNg7szL5H5yZPx1FW73");
// const imageRefs = userRef.collection("imageUrlz");

// const subTerra = firestore.collection("images");
// const testArray = [
//     "https://specials-images.forbesimg.com/imageserve/1030311008/960x0.jpg?fit=scale",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMMGIUKa477jL-PzlfGXDsAQh0_NTvE_pqNw&usqp=CAU",
//     "https://i.ytimg.com/vi/gUnK_xeUPgg/maxresdefault.jpg"
// ];


// class ArchiveMain extends Component  {
//     constructor(props) {
//         super(props)
//         this.state = {
//             imageUrls: []
//         };
//     }
    

//     static contextType = UserContext;
//     componentDidMount () {
//         const user = this.context;
//         // const {photoURL, displayName, email, imageUrls} = user;
        
//         imageRefs.get()
//         .then(function(querySnapshot) {
//             querySnapshot.forEach(function(doc) {
//                             // doc.data() is never undefined for query doc snapshots
//                 console.log(doc.id, " => ", doc.data());
                
//                 const myImageSource = doc.data().url; 
//                 const myId = doc.id;
//                 const myImage = {id: myId, url: myImageSource};
//                 console.log("IT IS WHAT IT IS " + myImage.url);
//                 const newUrls = this.state.imageUrls.slice();
//                 console.log("ARRAY of LINKS " + this.state.imageUrls);
//                 newUrls.push(myImage);

//                 this.setState({ imageUrls: newUrls });
                
//             });
//         })
//         .catch(function(error) {
//             console.log("Error getting documents: ", error);
//         })

//     }

//     render () {
//         return (
//             <div className = 'app__archive'>
//                 <img
//                     className = "archiveImage"
//                     src = "https://i.insider.com/55a6b356371d2278018b6a7a?width=1100&format=jpeg&auto=webp" alt = 'XENA'
//                 />
//                 {/* <img
//                     className = "archiveImage"
//                     src = {this.user.imageUrls[1]} alt = 'XENA1'
//                 /> */}
//                 <div>
//                     {
//                         testArray.map(myItem =>(
//                             <img
//                                 key={myItem}
//                                 src = {myItem} alt = "XENA"
//                             />
//                         ))
//                     }
//                 </div>
//                 <div>
//                     {this.state.imageUrls.map(myPic => (
//                         <div>id: {myPic.id}, url: {myPic.url}</div>
//                     ))}
//                 </div>
//             </div>
//         )
//     }
    
// }

// export default ArchiveMain
