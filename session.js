// Function to set the user session
function setUserSession() {
    localStorage.setItem('userLoggedIn', 'true');
}

// Function to clear the user session
function clearUserSession() {
    localStorage.removeItem('userLoggedIn');
}

// Function to check if the user is logged in
function isUserLoggedIn() {
    return localStorage.getItem('userLoggedIn') === 'true';
}
