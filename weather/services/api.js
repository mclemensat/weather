import axios from "axios";

const API_URL_BASE = "http://api.weatherapi.com/v1"
const API_URL_METHOD = "/current.json?key=0d0a6a9444cb44e1a8c75433222506"

export const getWeatherByCity = async (city) => {
    return (await axios.get(`${API_URL_BASE}${API_URL_METHOD} &q=${city}`)).data
}