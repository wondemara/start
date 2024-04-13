import React from 'react';
import { MdFavorite } from "react-icons/md";
import { FaRocketchat,FaShareAlt } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";

const Post = () => {
    return (
        <div className='postt'>
           <div className="partie_1">
           <div className='image'>
              <img className='img' src="./assets/profil.png" alt="reel " />
              <div>
                <p>Mara Wonde</p>
                <p className='date'>a l'instant</p>
              </div>
           </div>
              <p>...</p>
           </div>
           <div className="partie_2">
             <img className='img' src="./assets/profil.png" alt="reel " />
           </div>
           <div className="partie_3">
            <div className='boutton1'>
               <button><MdFavorite /></button>
               <button><FaRocketchat /></button>
               <button><FaShareAlt /></button>
            </div>
            <div className="button2">
               <button><CiBookmark /></button>
            </div>
           </div>
           <div className='partie_4'>
             
           </div>
        </div>
    );
};

export default Post;