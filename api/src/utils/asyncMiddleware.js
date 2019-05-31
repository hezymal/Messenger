const asyncMiddleware = requestHandler => (request, response, next) =>
    Promise.resolve(requestHandler(request, response, next))
        .catch(next);

module.exports = asyncMiddleware;
