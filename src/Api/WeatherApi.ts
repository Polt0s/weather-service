import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios'
import { addData } from "../Store/reducer/config";

const key: string = '3501c40ddf2f5dd5cd444a6fef65c509';

interface IResponse {
  name: string;
  main: { temp: number, pressure: number, humidity: number };
  weather: Array<{ id: number, name: string, description: string, icon: string }>;
  wind: { speed: number };
  clouds: { all: number };
}

const requestWeather = (values: any) => async (dispatch: Dispatch<{ type: string }>) => {
  const { city } = values;
  try {
    const response = await axios.get<IResponse>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`, {})
    const config = {
      cityName: response.data.name,
      temperature: Math.round(response.data.main.temp),
      weather: response.data.weather,
      windSpeed: Math.round(response.data.wind.speed),
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      clouds: Math.round(response.data.clouds.all),
    };
    dispatch(addData(config))
    return response.data;
  } catch (err) {
    throw new Error(`ошибка ${err}`);
  };
};

export default requestWeather;
