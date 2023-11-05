// authCommon.js

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js';

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
const auth = getAuth(app);

// Function to extract the part of the email before the "@"
function getUserNameFromEmail(email) {
    return email.split("@")[0];
}

// Check if a user is logged in
const updateLoginState = () => {
    const userDropdown = document.getElementById("userDropdown");
    const userEmailDisplay = document.getElementById("userEmailDisplay");
    const loginButton = document.getElementById("loginButton");

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is logged in
            const userName = getUserNameFromEmail(user.email);
            userEmailDisplay.innerText = userName;
            userDropdown.style.display = "block";
            loginButton.style.display = "none";
            // Store the login state locally
            localStorage.setItem('userLoggedIn', 'true');
        } else {
            // No user is logged in
            userDropdown.style.display = "none";
            loginButton.style.display = "block";
            // Store the login state locally
            localStorage.setItem('userLoggedIn', 'false');
        }
    });
};

// Logout functionality
const setupLogout = () => {
    const logoutLink = document.getElementById("logoutLink");

    logoutLink.addEventListener("click", () => {
        signOut(auth).then(() => {
            // User is logged out
            localStorage.setItem('userLoggedIn', 'false');
        }).catch((error) => {
            console.error("Logout failed:", error);
        });
    });
};

export { updateLoginState, setupLogout };
