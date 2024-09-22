import { useContext } from "react";
import { facebookContext } from "../store/facebbok_store";

const PostList=()=>{

    const {postArray}=useContext(facebookContext)
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

export default PostList;