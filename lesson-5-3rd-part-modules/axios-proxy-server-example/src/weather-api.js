import axios from "axios";

const weatherInstance = axios.create({
    baseURL: "https://api.weatherstack.com",
    params: {
        access_key: "ee10c6c95a86c75dcd3d7109143493a4"
    },
});

export const getCurrentWeather = async (city) => {
    try {
        // const { data } = await axios.get(
        //     `https://api.weatherstack.com/current?access_key=ee10c6c95a86c75dcd3d7109143493a4&query=${city}`
        //   );
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

