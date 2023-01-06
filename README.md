> Why do I have a folder named ".expo" in my project?
> The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?

- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
  > Should I commit the ".expo" folder?
  > No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
  > Upon project creation, the ".expo" folder is already added to your ".gitignore" file.

MANOMBOKA ETO NY README
install packages
créer un app à partir expo
npm i -g expo-cli
npx create-expo-app my-app

pour naviguer
npm install @react-navigation/native @react-navigation/native-stack
expo install react-native-screens react-native-safe-area-context

run l'app
npx expo start

run l'api
dotnet run --urls=http://0.0.0.0:5047

run ngrok
ngrok http 5047
