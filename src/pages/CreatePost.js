import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase-config';
import { addDoc, collection} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


function CreatePost({isAuth}) {

  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db,"posts")

  const navigate = useNavigate();

  const createPost = async()=>{
    await addDoc(postsCollectionRef,{
      title,
      postText,
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
    });
    navigate("/");
  };
  useEffect(()=>{
    if(!isAuth){
      navigate("/login");
    }
  },[]);
  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create a Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input placeholder="Title..." onChange={(event) => {
            setTitle(event.target.value)
          }} />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea placeholder="Share your thoughts..." id="" cols="30" rows="10" onChange={(event) => {
            setPostText(event.target.value)
          }} required></textarea>
        </div>
        <button onClick={createPost}>Submit post</button>
      </div>
    </div>
  )
}

export default CreatePost