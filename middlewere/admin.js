module.exports = function admin(){
    if(!require.user.isAdmin)
        return res.status(403).send('soro\'v rad etildi');

    next();
}