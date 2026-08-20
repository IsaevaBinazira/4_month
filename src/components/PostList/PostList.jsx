import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";

const PostList = () => {
 const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

const getDataFn = async () => {
    const result = await axios("https://dummyjson.com/posts");

    console.log(result.data);

const newList = result.data.posts.map((item, index) => {
      return {
        ...item,
        status: index < result.data.posts.length / 2,
      };
    });

 setList(newList);
    setLoading(false);
  };

  useEffect(() => {
    getDataFn();
  }, []);

  const deletePost = (id) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  };

  return (
    <div>
      <h2>Posts</h2>

      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
      {list.map((item) => {
 return (
      <div className="post" key={item.id}>
      <h3>{item.title}</h3>
     <p>{item.body}</p>
     <p>{item.status ? "true" : "false"}</p>
     <button onClick={() => deletePost(item.id)}>Удалить пост </button>
     </div>
      );
     })}
</div>
 )}
 </div>
  );
};

export default PostList;