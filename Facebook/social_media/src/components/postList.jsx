import { useContext } from "react";
import { facebookContext } from "../store/facebbok_store";

const PostList=({postArray})=>{

    return(
        <>
        
        {
          postArray.map((m)=>{
           return <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{m.title}</h5>
              <p className="card-text">{m.text}</p>
            </div>
          </div>
          })
        }

        </>
    )
}

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;