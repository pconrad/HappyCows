const LIMIT = 300;
module.exports = function(req){
    return [(req.query.page ? (req.query.page - 1): 0) * LIMIT, LIMIT]
};