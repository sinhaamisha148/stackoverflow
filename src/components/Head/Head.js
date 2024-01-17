import React from "react";
import './css/Head.css';
import SearchIcon from "@mui/icons-material/Search";
function Head() {
    return (<head>
        <div className="head-cointainer">
            <div className="head-left">
                <img src="https://logovectordl.com/wp-content/uploads/2020/10/stack-overflow-logo-vector.png" height="60" width="100"alt="logo"/>
        
            </div>
             <div className="head-middle">
            <div className="head-search-cointainer">
                <SearchIcon/>
                <input type ="text" placeholder="search"/>
            </div>
            </div>
            <div className="head-right">
                <div className="head-right-cointainer">
                <ul>
                   <li href="#">About</li>
                   <li href="#">Products</li>
                   <li href="#">Teams</li>

                </ul>

                </div>
            </div>
        </div>
        </head>
    );
}
export default Head;