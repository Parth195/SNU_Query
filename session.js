function setUserSession() {
    localStorage.setItem('userLoggedIn', 'true');
}

function clearUserSession() {
    localStorage.removeItem('userLoggedIn');
}

function isUserLoggedIn() {
    return localStorage.getItem('userLoggedIn') === 'true';
}
