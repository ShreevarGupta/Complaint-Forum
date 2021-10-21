import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  //Add configuration here
  apiKey: "AIzaSyCJU-0Q0_S6MevxngyujFpF-0-je2wgGE8",
  authDomain: "complain-forum-9e934.firebaseapp.com",
  projectId: "complain-forum-9e934",
  storageBucket: "complain-forum-9e934.appspot.com",
  messagingSenderId: "421896127546",
  appId: "1:421896127546:web:c341dcf05e03e1ade5a103"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

