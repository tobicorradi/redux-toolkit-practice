import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <section>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => {
          const { id, title, content } = post;
          return (
            <li key={id}>
              {title}
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PostList;
