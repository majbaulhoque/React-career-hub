// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhdMwLFcQFp-iR9DGwcHWh2grcMltkv08",
  authDomain: "career-hub-41fb3.firebaseapp.com",
  projectId: "career-hub-41fb3",
  storageBucket: "career-hub-41fb3.appspot.com",
  messagingSenderId: "22261349722",
  appId: "1:22261349722:web:aae824a78ccd3c1d428763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default(auth)