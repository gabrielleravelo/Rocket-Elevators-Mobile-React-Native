# Rocket-Elevators-Mobile-React-Native

This week, we create an app using React Native. For that, we made three screens. First screen is the login screen, an employee enter his email to log. After login, the home screen where elevators that are not online be displayed. When the user select an elevator, the next page will be displayed with the details of the elevator. In that page, we can change the status to online.

## Installation and running the test

- Create an app using expo

`npm i -g expo-cli`

`npx create-expo-app my-app`

- To navigate between sreens

`npm install @react-navigation/native @react-navigation/native-stack`

`expo install react-native-screens react-native-safe-area-context`

- To run the app

  We can use our phone to run the app. First, install "Expo go" in the phone (App Store or Play Store)

  Use ngrok for the connection with the API in localhost. Download ngrok, extract the folder, launch ngrok.exe then get the URL

![ngrok](https://user-images.githubusercontent.com/113941321/211241657-01d682ae-4460-41bd-8297-e9628ee987f7.png)

- In terminals

  Run the app (in VS Code using bash terminal)

  `npx expo start`

  Run the api (in VS using cmd terminal)

  `dotnet run --urls=http://0.0.0.0:5047`

  Run ngrok in terminal with launch ngrok.exe

  `ngrok http 5047`

## Useful links

- API link repository (with the endpoints)

`https://github.com/gabrielleravelo/Rocket_Elevators_Foundation_RestAPI.git`

- Main site repository (creation and initial filling of the database)

`https://github.com/gabrielleravelo/Rocket-Elevators-Foundation.git`

## Result

Login screen

![loginscreen](https://user-images.githubusercontent.com/113941321/211241179-f140861d-1b8e-4f3a-a430-82372ff3ea97.png)

Home screen

![homescreen](https://user-images.githubusercontent.com/113941321/211241250-014c5d3c-6590-4767-a709-c791732c92b0.png)

Elevator status screen

![statusscreen](https://user-images.githubusercontent.com/113941321/211241296-ed33ba9d-d5f6-490d-8f22-f722f58e3307.png)
