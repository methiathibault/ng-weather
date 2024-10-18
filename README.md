# NgWeather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Setting up the API Key

This project requires an API key from OpenWeatherMap to fetch weather data. Follow these steps to set up the API key:

1. Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) and get your API key.
2. Create a file named `.env` in the root directory of your project.
3. Add the following line to the `.env` file, replacing `YOUR_API_KEY` with your actual API key:

    ```plaintext
    API_KEY=YOUR_API_KEY
    ```

4. In your `src/environments/environment.ts` file, add the following line to include the API key:

    ```typescript
    export const environment = {
      apiKey: process.env.API_KEY
    };
    ```

## How to Use

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/ng-weather.git
    cd ng-weather
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Set up the API key as described in the "Setting up the API Key" section.

4. Start the development server:

For the start use to init the ApiKey:

    ```sh
    npm start
    ```

After you can use :

    ```sh
    ng serve
    ```

5. Open your browser and navigate to `http://localhost:4200/`.

6. Use the application to search for weather information by city.