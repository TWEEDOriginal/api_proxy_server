# API proxy server

> Server used for hiding API keys by making the requests in place of the frontend.


## Features

- Hide API keys by using the server to make the requests to the external API that requires the API key and returning the data received from the external API.

- Rate limiting : Limiting the amount of API calls that can be made by a specific client. e.g 100 API calls every 10 mins.

- Cache control: Depending on how frequently the data changes, the amount of API calls is also limited by setting the cache control to a specific time e.g 2 minutes, so within 2 minutes the same data will be returned until the 2 minutes is up.


## Prerequisites

- [Node js](https://nodejs.org/en/)

## Get started

1. clone the repo

2. Set up `.env` file, all the necessary environment variables can be found in `.env.example`

3. Install the dependencies using the command:
     ```sh
    $ npm install
    ```

4. Run the server locally:
    ```sh
    $ npm run devStart
    ```

## Routes

1. API 

    - Method: GET

    - Endpoint: http://localhost:3000/api/?q={city}


> New routes can be added for different external APIs and the rate limiting and caching can be set to your preferred values.

> This project makes use of [OpenWeather API](https://openweathermap.org/api) based on the [youtube tutorial](https://youtu.be/ZGymN8aFsv4) by [Traversy media](https://github.com/bradtraversy)
