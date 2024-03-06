import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function ShortUrl() {
    const params = useParams();
   useEffect(()=>{
    //get url from backend and then redirect
    
    axios.get(`http://localhost:8080/resolveUrl/${params.shortUrlId}`)
    .then((response)=>{
    window.location.href=`${response.data.longurl}`;
    });
    
   
   },[]);

    return (
        <div>
        
        </div>
    )
    }

export default ShortUrl
