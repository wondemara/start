import React from 'react';
import { CiSearch } from "react-icons/ci";
import Post from './Post';
import Storii from './Stori';

const Hearder = () => {
    return (
        <div className='hearder'>
            <div className='recherche'>
                <span className='icon'><CiSearch /></span>
                <input className='input' type="text" placeholder='search...'/>
            </div>
            <div className="reell">
             <Storii/>            
            </div>
            <div className='post'>
               <Post/>
            </div>
        </div>
    );
};

export default Hearder;