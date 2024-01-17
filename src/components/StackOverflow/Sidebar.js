import {Home, Public, Stars, Work } from '@mui/icons-material';
import React from 'react';
import{Link} from "react-router-dom";
import './css/sidebar.css'

function Sidebar(){
    return(
        <div className="sidebar">
          <div className="sidebar-cointainer">
            <div className="sidebar-options">
              <div className="sidebar-option">
                <Home/>
                <Link>Home</Link>
        </div>
        <div className='sidebar-option'>
            <Link>PUBLIC</Link>
            <div className='link'>
                <div className='link-tag'>
                    <Public/>
                    <Link>Questions</Link>
                </div>
                <div className='tags'>
                    <p>Tags</p>
                    <p>Users</p>
                </div>
            </div>
        </div>
             <div className='sidebar-option'>
                <p>COLLECTIVES</p>
                <div className='link'>
                    <div className='link-tag'>
                        <Stars/>
                        <Link>Explore Collectives</Link>
                    </div>
                </div>
             </div>
             <div className='sidebar-option'>
                <p>FIND A JOB</p>
             <div className='link'>
                <div className='link-tag'>
                    <Link>Questions</Link>
                </div>
                </div>

             </div>
                   <div className='sidebar-option'>
                    <p>TEAMS</p>
                    <div className='link-tag'>
                       <Work/>
                    <Link>Compaines</Link>
                   </div>
                   </div>
                   <div className='sidebar-option'>
                    <button type="button">Login</button>
                    </div>
                    <div className='sidebar-option'>
                    <button type="button">Signup</button>
                   </div>
                

            </div>

               </div>
        </div>
    )
}
export default Sidebar;