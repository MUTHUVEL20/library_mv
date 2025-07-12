import { DataTypes, INTEGER, STRING } from "sequelize";

import { sequelize } from "../config/database";


export const Book = sequelize.define('Book', {


    id : { type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    title : { type:DataTypes.STRING, allowNull:false },
    author : { type:DataTypes.STRING, allowNull:false },
    available : { type:DataTypes.BOOLEAN, defaultValue:true}

})