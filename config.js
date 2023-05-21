import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAbA-o1X6pCt4KDukv2JcKWllxbYsfL82E",
  authDomain: "on-your-marks.firebaseapp.com",
  databaseURL: "https://on-your-marks-default-rtdb.firebaseio.com",
  projectId: "on-your-marks",
  storageBucket: "on-your-marks.appspot.com",
  messagingSenderId: "968798812587",
  appId: "1:968798812587:web:8d719f70c1a61d8d417aee"
};
 if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();