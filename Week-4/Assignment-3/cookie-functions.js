function addCredentialsCookies(res, email, password){
    // After passing the strings to cookies, they should be URL-encoded
    // e.g. john@mail.com -> john%40mail.com
    // Usually it is handled automatically, but better do double-check
    const emailEncoded = encodeURIComponent(email);
    const passwordEncoded = encodeURIComponent(password);
    res.cookie('email', emailEncoded);
    res.cookie('password', passwordEncoded);
}

function getCredentialsCookies(req, email, password){
    const emailEncoded = decodeURIComponent(req.cookies.email);
    const passwordEncoded = decodeURIComponent(req.cookies.password);
    res.cookie('email', emailEncoded);
    res.cookie('password', passwordEncoded);

}

function clearCredentialsCookies(res){
    res.clearCookie('email');
    res.clearCookie('password');
}

module.exports = { addCredentialsCookies, getCredentialsCookies, clearCredentialsCookies};