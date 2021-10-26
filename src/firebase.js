import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyA2sZKZ3sQiqi7Gcx-z8Nlb8iSYS9vF51Y",
  authDomain: "camerax-1d8e4.firebaseapp.com",
  databaseURL: "https://camerax-1d8e4-default-rtdb.firebaseio.com",
  projectId: "camerax-1d8e4",
  storageBucket: "camerax-1d8e4.appspot.com",
  messagingSenderId: "94381206951",
  appId: "1:94381206951:web:3e0e8718d9a06933425a82",
  measurementId: "G-H9KCL5ZNCF"
})

export const db = app.database()
export const auth = app.auth()
export default app
