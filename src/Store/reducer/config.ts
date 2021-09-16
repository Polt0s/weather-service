import { createSlice } from "@reduxjs/toolkit";

interface IConfig {
  cityName: string;
  temperature: number;
  weather: Array<{ description: string, icon: string, id: number, main: string }>;
  windSpeed: number;
  pressure: number;
  humidity: number;
  clouds: number;
};

const initialState = {
  cityName: '',
  temperature: 0,
  weather: [],
  windSpeed: 0,
  pressure: 0,
  humidity: 0,
  clouds: 0,
} as IConfig;

const useConfig = createSlice({
  name: 'config',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.cityName = action.payload.cityName;
      state.temperature = action.payload.temperature;
      state.weather = action.payload.weather;
      state.windSpeed = action.payload.windSpeed;
      state.pressure = action.payload.pressure;
      state.humidity = action.payload.humidity;
      state.clouds = action.payload.clouds;
    },
  }
});

export const { addData } = useConfig.actions;

export default useConfig.reducer;
