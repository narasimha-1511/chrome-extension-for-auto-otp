// Listenn for messages from popup
/*
let getmessagefromcontentscript;

import { initializeApp } from "./firestore/firebase-app.js";

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

import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from "./firestore/firebase-database.js";

const db = getDatabase();

*/

chrome.storage.local.get(["mobile"]).then((result) => {
  console.log("Value currently is " + result.mobile);
  document.getElementById("mobile").value = result.mobile;
});
// chrome.storage.local.get(["key"]).then((result) => {
//   console.log("Value currently is " + result.key);
// });

savee.addEventListener("click", () => {
  chrome.storage.local
    .set({ mobile: document.getElementById("mobile").value })
    .then(() => {
      console.log("Mobile is set");
    });
  chrome.storage.sync
    .set({ otp: document.getElementById("otp").value })
    .then(() => {
      console.log("Otp is set");
    });
});

// chrome.runtime.onMessage.addListener((msg, sender, reponse) => {
//   //Check if the message for the popup
//   if (msg.command == "getvalue_of_the_pop") {
//     // reponse({message:"Received Message Successfully"});

//     document.getElementById("otp").value = msg.message;
//     var hh = document.getElementById("mobile").value;
//     //reponse({ message: hh });
//   }
//   //firebasedatabase

//   // const dbRef = ref(getDatabase());
// });
