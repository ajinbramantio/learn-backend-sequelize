const Sequelize = require('sequelize')
const connect = require('../../config/connection')

const tbl_Dosen = connect.define(
  'Dosens',
  {
    // attributes
    id_dosen: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nipDosen: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },

    nameDosen: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    tlpn: {
      type: Sequelize.STRING(25)
      // allowNull defaults to true
    },
    address: {
      type: Sequelize.STRING(255)
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

module.exports = tbl_Dosen
