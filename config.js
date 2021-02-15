import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDMKmCpJLHZ99J2tsFdqLbb3yCVNvFUC14",
  authDomain: "book-giver.firebaseapp.com",
  databaseURL: "https://book-giver.firebaseio.com",
  projectId: "book-giver",
  storageBucket: "book-giver.appspot.com",
  messagingSenderId: "153793422826",
  appId: "1:153793422826:web:34dfa7b7b7544a3360be93",
  measurementId: "G-L20Z3E05ME"
};
 
if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)
}
//export default firebase.database()


export default firebase.firestore();
