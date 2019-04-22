const Sequelize = require('sequelize')
const connect = require('../../config/connection')

const tbl_Matkul = connect.define(
  'Matkuls',
  {
    id_matkul: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    kodeMatkul: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    // attributes
    nameMatkul: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    jmlSKS: {
      type: Sequelize.INTEGER(2),
      allowNull: false
      // allowNull defaults to true
    },
    semester: {
      type: Sequelize.INTEGER(2),
      allowNull: false
      // allowNull defaults to true
    },
    id_dosen: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Dosens',
        key: 'id_dosen'
      },
      allowNull: false
      // allowNull defaults to true
    },
    createdAt: {
      type: Sequelize.DATE
      // allowNull defaults to true
    }
  },
  {
    timestamps: false
    // options
  }
)
module.exports = tbl_Matkul
