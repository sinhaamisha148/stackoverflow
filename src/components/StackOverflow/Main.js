import React from 'react';
import {FilterList}  from '@mui/icons-material';
import {Link} from "react-router-dom";
import AllQuestions from "./AllQuestions"
import './css/Main.css';

 function Main(){
    return(
        <div className='main'>
            <div className='main-container'>
            <div className='main-container'>
                <div className='main-top'>
                    <h2>All Questions</h2>
                    <Link>
                    <button>Ask Questions</button>
                    </Link>
                </div>
                <div className='main-dec'>
                    <p>All Questions start</p>
                    <div className='main-filtter'>
                        <div className='main-tabs'>
                            <div className='main-tab'>
                                <Link>Newest</Link>
                            </div>
                            <div className='main-tab'>
                                <Link>Active</Link>
                            </div>
                            <div className='main-tab'>
                                <Link>More</Link>
                            </div>
                        </div>
                        <div className='main-filter-iteam'>
                            <FilterList/>
                            <p>Filter</p>
                        </div>
                    </div>
                </div>
                <div className='Questions'>
                    <div className='Question'>
                        <AllQuestions/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
 }
 export default Main;