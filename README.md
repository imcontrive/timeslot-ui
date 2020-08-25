## Application Requirements:

---

1. Using the React Native, build a screen which shows a list of hour long slots from 9am to 5pm.

2. When one time slot is clicked, load details screen (another page/screen) which asks for first name, last name and phone number. Screen will have 2 options - Cancel and Save.

3. When the name and phone number is submitted/saved, the app should redirected back to the main screen and selected timeslot should change to red, indicating the time slot is no longer available.

4. If the red time slot is clicked on again, redirect again to the details screen with the name and phone number for that appointment pre-populated. Users will be able to edit the name and phone number to change the user for the appointment. Don’t worry about credentials. Any user can update any timeslot, irrespective, it is booked by same user or not.

5. Create a simple local storage to persist the data as a fallback for the booking data since REST endpoints don’t exist.

---

### Deployed link for this application [https://timeslots.netlify.app](https://timeslots.netlify.app).

---

## How to run in local environment:

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
