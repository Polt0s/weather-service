import { Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios'
import { addData } from "../Store/reducer/config";

const key: string = '3501c40ddf2f5dd5cd444a6fef65c509';

interface IValue {
  name: string;
  main: any;
  weather: Array<{ description: string, icon: string, id: number, main: string }>;
}

interface Response {
  status: string;
  data: IValue;
}

const requestWeather = (values: any) => async (dispatch: Dispatch<any>) => {
  const { city } = values;
  const response = await axios.get<AxiosResponse<Response>>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`, {})
  const config = {
    cityName: response.data.name,
    temperature: Math.round(response.data.main.temp),
    weather: response.data.weather,
    windSpeed: Math.round(response.data.wind.speed),
    pressure: response.data.main.pressure,
    humidity: response.data.main.humidity,
    clouds: Math.round(response.data.clouds.all),
  };
  console.log(config);
  dispatch(addData(config))
  return response.data;
};

export default requestWeather;
