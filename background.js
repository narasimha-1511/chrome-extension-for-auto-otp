// Import the functions you need from the SDKs you need
import { initializeApp } from "./firestore/firebase-app.js";
// import { getFirestore } from "./firestore/firebase-firestore-compat.js";
// import { getAnalytics } from "./firestore/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth } from "./firestore/auth.js"; //---> Trying NEww

const firebaseConfig = {
  apiKey: "AIzaSyDfAYJUMCzWARhR64OfB-D3hQW_Xhn6Qwc",
  authDomain: "auto-otp-public.firebaseapp.com",
  databaseURL: "https://auto-otp-public-default-rtdb.firebaseio.com",
  projectId: "auto-otp-public",
  storageBucket: "auto-otp-public.appspot.com",
  messagingSenderId: "883142088527",
  appId: "1:883142088527:web:71257bb44807fb5c7c973a",
};

const app = initializeApp(firebaseConfig);

// import { getDatabase, ref, onValue } from "firebase/database";

import {
  getDatabase,
  ref,
  onValue,
  set,
  get,
  child,
  update,
  remove,
} from "./firestore/firebase-database.js";
// const port = chrome.runtime.connect({ channel: "scaler" });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.command == "Get_Value_From_FireBase")
//     send(message.message).then(sendResponse);

//   return true;
// });

const db = getDatabase();
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.interval == 1) {
    set(ref(db, message.message), 0);
    sendResponse(0);
  } else {
    send(message.message).then(sendResponse);
    return true;
  }

  console.log(message.message);
  console.log(message.interval);
  // return true;
});

const send = async (msg) => {
  const dbRef = ref(getDatabase(app));

  const snapshot = await get(child(dbRef, msg));

  let val;

  if (snapshot.exists()) {
    val = snapshot.val();
    if (val == null) {
      val = 0;
    } else {
      // set(ref(db, message.message), 0);
      //When the OTP is There Delete the OTP From The Backed
    }
  } else {
    val = 0;
  }
  console.log(val);

  return val;
};
