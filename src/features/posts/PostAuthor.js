import { useSelector } from "react-redux";
import React from "react";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === Number(userId));

  return <span> by {author ? author.name : "Unknown Author"}</span>;
};
export default PostAuthor;
