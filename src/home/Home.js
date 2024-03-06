import React, { useState } from 'react';
import './home.css';
import Helper from '../util/Helper';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';
import Navbar from '../component/navbar';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Home() {
    const [url, setUrl] = useState('');
    const [showMiniUrl, setShowMiniUrl] = useState(false);
    const [isSnackBarVisible, setSnackBarVisible] = useState(false);
    const [minimizedUrl,setMinimizedUrl] = useState('Mini URL will be populated here');

    const shortenUrl = (e) => {
        e.preventDefault();
        if (!Helper.isValidUrl(url)) {
            setShowMiniUrl(false);
            alert(`${url} is incorrect`);
        } else {
                console.log("backend url is "+ process.env.SERVICE_BASE_URL);
            axios.post('http://localhost:8080'+'/shorten' , 
            {
                    "longUrl": url
            })
            .then(
                (response)=>{ setMinimizedUrl(response.data.code)}
            );
            setShowMiniUrl(true);
            console.log("value is " + showMiniUrl + minimizedUrl);
            // get minimized URL
        }
    };
   
    const snackBarOpen = () => {
    setSnackBarVisible(true);
    };

    const snackBarClose = () => {
        setSnackBarVisible(false);
    };

    return (
        <div>
            <Navbar></Navbar>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
                integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
                crossOrigin="anonymous" />
            <div className="container">
                <br />
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <form className="card card-sm" onSubmit={shortenUrl}>
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col">
                                    <input className="form-control form-control-lg form-control-borderless"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        placeholder="Enter URL to shorten it" />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-lg btn-success" type="submit">Shorten</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {showMiniUrl &&
                <div className='d-flex justify-content-center'>
                    <div className='row justify-content-center'>
                        <div className="content mt-4 col-12 btn btn-outline-primary" title='Click to copy' id="contentDiv" onClick={()=>Helper.copyContent(document.getElementById("contentDiv").innerText,snackBarOpen)}>
                            http://localhost:3000/{minimizedUrl} <ContentCopyIcon/>
                        </div>
                    </div>
                </div>
            }

            <Snackbar
                open={isSnackBarVisible}
                autoHideDuration={3000}
                message="Content Copied"
                onClose={snackBarClose}
            />
        </div>
    );
}

export default Home;
