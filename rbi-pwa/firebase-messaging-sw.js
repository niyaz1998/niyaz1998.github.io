importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

/// in case you want to change this file please contact Rosbank Invest team
const firebaseConfig = {
  apiKey: "AIzaSyASUBSs9AS4CwEQ_6vI4nQyoTXL6fnUA3k",
  authDomain: "rb-invest-prod.firebaseapp.com",
  projectId: "rb-invest-prod",
  storageBucket: "rb-invest-prod.appspot.com",
  messagingSenderId: "85300523227",
  appId: "1:85300523227:web:77fd192c4f80683802dcfe",
  measurementId: "G-9EBEJJG942"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();