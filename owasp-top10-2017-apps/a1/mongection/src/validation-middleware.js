const requestValidate = (req, res, next) => {
    const body = req.body;
    if (body.desiredType && !(typeof body.desiredType === 'string')) {
        return next(new Error('Params must to be a string'));
    }
    next();
}


module.exports = {
    requestValidate
}