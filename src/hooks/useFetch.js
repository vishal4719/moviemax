import { useState,useEffect } from "react"



export const useFetch = (apiPath,queryTerm="") => {
    const [data,setData]=useState([]);
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=e99f273c1abc6168dd2cb92377b79157&query=${queryTerm}`;
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
