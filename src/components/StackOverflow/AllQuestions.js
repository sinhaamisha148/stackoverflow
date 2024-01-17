import React from "react";
import {AccountCircle}  from '@mui/icons-material';
import {Link} from "react-router-dom";
import "./css/AllQuestions.css";
 function AllQuestions(){
    return(
        <div className="all-questions">
            <div className="all-questions-cointainer">
                <div className="all-questions-left">
                    <div className="all-option">
                        <div className="all-option">
                            <p>0</p>
                            <span>Votes</span>
                        </div>
                        <div className="all-option">
                            <p>0</p>
                            <span>Answers</span>
                        </div>
                        <div className="all-option">
                            <p>0</p>
                            <small>0 views</small>
                        </div>
                    </div>
                </div>
                <div className="question-answer">
                    <Link>How to use drag and drop in ant design?</Link>
                        <div style={{
                            width:"90%",
                         }}>
                            <div>This is answer</div>
                        </div>
                        <div style={{
                            display:"flex"
                        }}>
                            <span className="question-tags">react</span>
                            <span className="question-tags">antd</span>
                            <span className="question-tags">frontend</span>
                            </div>
                            <div className="author">
                                <small>Timestamp</small>
                                <span className="author-details">
                                    <p>User name</p>
                                    <AccountCircle/>
                                </span>   
                                </div>                         
                </div>
                </div>
            </div>
    )
 }
 export default AllQuestions;