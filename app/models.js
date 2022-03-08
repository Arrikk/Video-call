const redisClient = require('./config/redis')

exports.saveCallId = (key, val) => {
        let item = localStorage.setItem(key, JSON.stringify(val))
        return item;
}
exports.getCallId = (key) => {
    let item = JSON.parse(localStorage.getItem(key))
    return item;
}