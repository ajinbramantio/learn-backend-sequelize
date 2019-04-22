const ModelDosen = require('./model')
const controller = {
  getAll: (req, res) => {
    res.status(200).send({
      message: 'get All Dosen'
    })
  },
  register: (req, res) => {
    console.log(req.body)

    res.status(200).send({
      message: 'register'
    })
  }
}

module.exports = controller
