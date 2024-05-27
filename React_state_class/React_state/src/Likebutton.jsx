import { useState } from "react";
export default function Likebutton(){
   
   let [isLiked,setIsLiked]=useState(false);
   let toggleLike=()=>{
    setIsLiked(!isLiked);
   };
   let likeStyle={color:"red"};
    return(
        <div>
            <h3 onClick={toggleLike}>Like it  &nbsp;
                {!isLiked ? <i className="fa-solid fa-heart" style={likeStyle}></i>:<i className="fa-regular fa-heart" ></i>}
                </h3>
        </div>
    );
}