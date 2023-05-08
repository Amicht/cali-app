import axios from 'axios';
import { ExerciseModel } from "../../models/ExerciseModel";
import { ApiQueryParamsI } from '../../models/ApiQueryParamsI';


const APIKEY = "gyQd309gy5ZHfmDwWJVbrw==UKKBGeuLvOWeU6u7";
const SERVERURL = "https://api.api-ninjas.com/v1/exercises";




const getQueryString = (apiCallParams:ApiQueryParamsI) => {

    const queryString = Object.entries(apiCallParams)
        .map(param => param[1]? `${param[0]}=${param[1]}`:"")
        .join('&');

    return queryString;
}

const getExercises = async (apiCallParams:ApiQueryParamsI) => {
    
    
    const queryString = getQueryString(apiCallParams);
    
    const excercises:ExerciseModel[] = await axios
    .get(`${SERVERURL}?${queryString}`,{
        headers:{
            'X-Api-Key': APIKEY,
            'Content-Type': 'application/json'
        }})
    .then(res => res!.data);

    return excercises;

}


export {
    getExercises
}
