import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGhpzlqY0LQwqz4p6ju2f3Wyl9Ly1cNaI",
  authDomain: "mydatabase-eb400.firebaseapp.com",
  databaseURL: "https://mydatabase-eb400-default-rtdb.firebaseio.com",
  projectId: "mydatabase-eb400",
  storageBucket: "mydatabase-eb400.appspot.com",
  messagingSenderId: "745081706137",
  appId: "1:745081706137:web:b7e8bc4ffe1f8d8ac90a08"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();