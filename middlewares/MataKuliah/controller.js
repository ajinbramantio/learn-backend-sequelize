const Dosen = require('../dosen/model')
const ModelMatkul = require('./model')

const controller = {
  getAll: async (req, res) => {
    Dosen.hasMany(ModelMatkul, { foreignKey: 'id_dosen' })
    ModelMatkul.belongsTo(Dosen, { foreignKey: 'id_dosen' })

    const listMateri = await ModelMatkul.findAll({
      attributes: [
        'id_matkul',
        'kodeMatkul',
        'nameMatkul',
        'jmlSKS',
        'semester'
      ],
      include: [
        {
          model: Dosen,
          attributes: ['id_dosen', 'nipDosen', 'nameDosen']
        }
      ]
    }).then(listKuliah => {
      //   console.log('All users:', JSON.stringify(dosen, null, 4))
      const AllMataKuliah = JSON.stringify(listKuliah)
      //   console.log(JSON.parse(AllDosen))

      return JSON.parse(AllMataKuliah)
    })
    res.status(200).send({
      message: 'get All',
      list: listMateri
    })
  },

  register: async (req, res) => {
    const newMatkul = await ModelMatkul.create({
      ...req.body,
      createdAt: new Date()
    })

    res.send({
      message: ' register matkul success',
      Matkul: newMatkul
    })
  }
}

module.exports = controller
