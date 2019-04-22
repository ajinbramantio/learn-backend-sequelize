const Sequelize = require('sequelize')
const ModelDosen = require('./model')

const Op = Sequelize.Op
const controller = {
  getAll: async (req, res) => {
    const Dosens = await ModelDosen.findAll().then(dosen => {
      const AllDosen = JSON.stringify(dosen)
      return JSON.parse(AllDosen)
    })

    if (Dosens.length === 0) {
      res.status(404).send({
        message: 'data  not found'
      })
    } else {
      res.status(200).send({
        message: 'get All Dosen',
        Data_Dosen: Dosens
      })
    }
  },
  register: async (req, res) => {
    const Dosens = await ModelDosen.findAll({
      where: {
        [Op.or]: [{ nipDosen: req.body.nipDosen }, , { tlpn: req.body.tlpn }]
      }
    }).then(dosen => {
      const AllDosen = JSON.stringify(dosen)
      return JSON.parse(AllDosen)
    })

    if (Dosens.length === 0) {
      const newDosen = await ModelDosen.create({
        ...req.body,
        createdAt: new Date()
      })
      res.status(200).send({
        message: 'register',
        Dosen: newDosen
      })
    } else {
      res.status(409).send({
        message: 'Data is ready exists'
      })
    }
  },
  profileDosenById: async (req, res) => {
    const DosenById = await ModelDosen.findOne({
      where: { id_dosen: req.params.id }
    }).then(dosen => {
      const oneDosen = JSON.stringify(dosen)
      return JSON.parse(oneDosen)
    })

    if (DosenById === null) {
      res.status(404).send({
        message: 'id Not there'
      })
    } else {
      res.status(200).send({
        message: 'get profile',
        Dosen: DosenById
      })
    }
  }
}

module.exports = controller
