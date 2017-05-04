import React from "react";
import axios from "axios";

export function getSources (callback){
// window.mo = function getSources(callback){
//  axios.get('https://newsapi.org/v1/sources')
//   .then(function (response) {
    
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


      axios
        .get("https://newsapi.org/v1/sources")
        .then((result)=> {
            return callback(result.data.sources)
        })
}



export function getHeadlines (sources, sort='top',callback){
  // window.mo = function getHeadlines (sources, sort='top',callback){
      axios
        .get(`https://newsapi.org/v1/articles?source=${sources}&sortBy=${sort}&apiKey=213327409d384371851777e7c7f78dfe`)
        .then((result) => { 
          return callback(result.data.articles)
        });

}

