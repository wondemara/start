import React from 'react';
import { IoMdHome,IoIosNotifications } from "react-icons/io";
import { MdAddToPhotos } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";

const Left = () => {
    return (
        <div className='left'>
            <div className='image_insta'>
               <img className='img' src="./assets/insta.png" alt="instagram" />
            </div>
            <div className='page'>
              <ul className='ul'>
                <li className='li'><span className='icon'><IoMdHome /></span><span>Home</span></li>
                <li className='li'><span className='icon'><IoIosNotifications /></span><span>Notification</span></li>
                <li className='li'><span className='icon'><MdAddToPhotos /></span>Post<span></span></li>
                <li className='li'><span className='icon'><BsCameraReelsFill /></span><span>Reel</span></li>
                <li className='li'><span className='icon'><img className='img' src="./assets/profil.png" alt="profil" /></span><span>Profil</span></li>
              </ul>
            </div>
        </div>
    );
};

export default Left;