import React from "react"
import { useSelector } from "react-redux"

import Post from "../components/Post" 

//큰 단위 페이지;

const PostList = (props) => {
  const post_list = useSelector((state)=> state.post.list)

  console.log(post_list);
  return (
    <React.Fragment>
      <Post/>
    </React.Fragment>
  )
}




export default PostList;