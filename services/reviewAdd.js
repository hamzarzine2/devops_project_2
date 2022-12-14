module.exports = function (exoplanet){
    const reg = new RegExp('^[A-Z0-9]+$');
    if(reg.test(exoplanet))return true;

    return false;
};