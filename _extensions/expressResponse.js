module.exports = {};

/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 */
module.exports.respondOK = async function respondOK(request, response) {
    return response.status(200).send("OK");
}

/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 */
module.exports.renderHTMLView = async function renderHTMLView(request, response, path, options) {
    return response.render(path, options);
}