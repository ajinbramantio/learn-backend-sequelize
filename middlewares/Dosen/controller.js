const ModelDosen = require('./model')
const controller = {
  getAll: async (req, res) => {
    const Dosens = await ModelDosen.findAll().then(dosen => {
      const AllDosen = JSON.stringify(dosen)
      return JSON.parse(AllDosen)
    })

    if (Dosens.length === 0) {
      res.status(404).send({
        message: 'data dosen not found',
        Data_Dosen: Dosens
      })
    } else {
      res.status(200).send({
        message: 'get All Dosen',
        Data_Dosen: Dosens
      })
    }
  },
  register: async (req, res) => {
    const newDosen = await ModelDosen.create({
      ...req.body,
      createdAt: new Date()
    })
    res.status(200).send({
      message: 'register',
      newDosen
    })
  },
  profileDosenById: async (req, res) => {
    const DosenById = await ModelDosen.findOne({
      where: { id_dosen: req.params.id }
    }).then(dosen => {
      const AllDosen = JSON.stringify(dosen)
      return JSON.parse(AllDosen)
    })

    res.status(200).send({
      message: 'get profile',
      Dosen: DosenById
    })
  }
}

module.exports = controller
