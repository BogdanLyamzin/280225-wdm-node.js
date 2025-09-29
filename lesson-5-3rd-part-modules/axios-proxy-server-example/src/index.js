import {createServer} from "node:http";

import { getCurrentWeather } from "./weather-api.js";

const server = createServer(async (request, response)=> {
    response.setHeader("Content-Type", "text/html");
    if(request.method !== "GET") {
        return response.end("<h2>Page not found</h2>");
    }
    if(request.url.includes("weather")) {
        const city = request.url.split("/")[2];
        const {data, error} = await getCurrentWeather(city);
        if(error) {
            response.statusCode = 400;
            return response.end(`<h2>City ${city} not found</h2>`);
        }
        const {current} = data;
        return response.end(`<h2>Temperature in city ${city} ${current.temperature}</h2>`);
        // try {
        //     const {current} = await getCurrentWeather(city);
        //     return response.end(`<h2>Temperature in city ${city} ${current.temperature}</h2>`);
        // }
        // catch(error) {
        //     response.statusCode = 400;
        //     return response.end(`<h2>City ${city} not found</h2>`);
        // }

    }
    return response.end("<h2>Page not found</h2>");
})

server.listen(3000, ()=> console.log("Server running on 3000 port"));