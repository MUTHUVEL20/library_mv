import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";


export const Member = sequelize.define('Member', {

    id : {

        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },

    name : {

        type: DataTypes.STRING,
        allowNull:false
    },

    email : {

        type: DataTypes.STRING,
        unique:true,
        allowNull:false
    }

})