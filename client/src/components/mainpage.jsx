import React, { useState, useEffect } from 'react';
import './style.css'

const Mainpage = () => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState('');

  const Getallposts = async () => {
    const res = await fetch('mongodb://127.0.0.1:27017/test/postapi');
    const data = await res.json();
    setPosts(data);
  };

  const GetUserPosts = async () => {
    const res = await fetch(`http://127.0.0.1:27017/test/userposts/${userId}`);
    const data = await res.json();
    setPosts(data);
  };

  return (
    <div>
      <button  className='buttonapi' onClick={Getallposts}>Get All Posts</button>
      <input className='input' style={{marginLeft:"25px"}} type="text" placeholder='write an id' onChange={e => setUserId(e.target.value)} />
      <button className='buttonuser' onClick={GetUserPosts}>Get User Posts</button>
      <table className='table table-striped table-dark'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mainpage;