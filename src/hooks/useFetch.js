import { useState,useEffect } from "react"



export const useFetch = (apiPath,queryTerm="") => {
    const [data,setData]=useState([]);
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=86daa5377e3af5f870f0b4ba81382b3e&query=${queryTerm}`;
    useEffect(()=>{
        async function fetchMovies(){
          const response = await fetch(url);
          const json =await response.json()
          setData (json.results);
              }
              fetchMovies();
      },[url])
  return  {data}
   
  
}
