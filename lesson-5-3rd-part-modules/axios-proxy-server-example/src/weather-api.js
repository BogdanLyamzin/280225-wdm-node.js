import axios from "axios";

const weatherInstance = axios.create({
    baseURL: "https://api.weatherstack.com",
    params: {
        access_key: process.env.WEATHER_API_ACCESS_KEY
    },
});

export const getCurrentWeather = async (city) => {
    try {
        // const { data } = await weatherInstance.get(`/current?query=${city}`);
        const { data } = await weatherInstance.get("/current", {
            params: {
                query: city,
            }
        });
          return {data};
    }
    catch(error) {
        return {error};
    }
};

