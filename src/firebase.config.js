import { initializeApp } from "firebase";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyAbRn6SitPdOY_O3d-VBX8VFakZLSWOah4",
  authDomain: "crypto-follow-2c41d.firebaseapp.com",
  databaseURL: "https://crypto-follow-2c41d.firebaseio.com",
  projectId: "crypto-follow-2c41d",
  storageBucket: "",
  messagingSenderId: "946754474156"
});

export const db = app.database();

