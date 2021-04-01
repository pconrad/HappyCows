const LIMIT = 300;
module.exports = function(req){
    return {
        offset: (req.query.page ? (req.query.page - 1): 0) * LIMIT,
        limit: LIMIT,
    }
}