In this project a calendar application demo was created using React. It has a full on navigation system and the ability to add, edit and delete reminders, which include: title, description, city, time and priority (Through a color coded system). Moreover, a weather API (Open Weather Map​) was used in order to bring in the forecasted weather of a given city that the user is prompted to select beforehand, by default the weather the API initially brings is that of Bogotá. 

On the right side of the application we have an overall reminders column which includes a randomly generated motivational quote, as well as the reminders of the day and those of the upcoming (+3) days. 

Every time the user adds in a reminder the title gets displayed on the calendar, however in order for them to see, edit or delete the remaining information they must select the day. For editing a reminder the user just needs to type in on top of the title or description and it will be saved automatically upon clicking elsewhere.

Input validation ensures that only a limited number of characters are allowed and that required fields aren't empty before successfully creating a reminder. Aditionally, a confirmation modal was added to ensure that the user doesn't delete reminders accidentally. 

Redux was used to handle the state of the calendar and no UI libraries were used. However react-time-picker came in handy when designing the time input, sweetalert2 when it came to displaying alert messages and react-autosuggest for the City selector. 

In the README folder, under Mock-ups, the design concept developed using Adobe XD is shown. Although some minor variations from it were made, the end result which can be found under the 'Final version' folder includes several improvements such as color coding the present, past and future days. Furthermore, the result of the unit tests can be found under 'Tests'

Now, as for running the project the three main considerations are:
        1. In the root of the project a file called .env.local needs to be created and the API key included, for demonstration purposes the following key can be used: 

                            REACT_APP_API_KEY=8544960acc2a9e67eceda4124dee2a33

        2. Make sure to run npm install to install all dependencies. 
        3. Have fun creating reminders and navigating through the calendar. 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
