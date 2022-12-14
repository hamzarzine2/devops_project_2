module.exports = function (exoplanet) {
    const reg = new RegExp("^[A-Z0-9-.]+$");

    return reg.test(exoplanet);
};
