// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDr8S2OmDIo5EsNU97uJWq3gQlqv8zitAI",
    authDomain: "snu-query.firebaseapp.com",
    databaseURL: "https://snu-query-default-rtdb.firebaseio.com",
    projectId: "snu-query",
    storageBucket: "snu-query.appspot.com",
    messagingSenderId: "350908354215",
    appId: "1:350908354215:web:146b8142a7db2549f15582",
    measurementId: "G-T7426ZGZWQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAnalytics(app);
