import React from "react";
import axios from "axios";

export function getSources (){
axios.get('https://newsapi.org/v1/sources')
  .then(function (response) {
    
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}


export function getHeadline (){
axios.get(' https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey={213327409d384371851777e7c7f78dfe')
  .then(function (response) {
    return TheJson = response.data
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

