const {saveCallId, getCallId} = require('./models')
exports.saveCallId = (req, res) => {
    try {
        const {id, signalData} = req.body
         saveCallId(id, signalData)
        res.status(200).send(true)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

exports.getCallId = (req, res) => {
    try {
        const {id} = req.params
        const code = getCallId(id)
        res.status(200).send({code})
    } catch (error) {
        res.status(400).send(error.message)
    }
}