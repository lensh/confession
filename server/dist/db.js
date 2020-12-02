"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoModel = void 0;
const Sequelize = require("sequelize");
const sequelize = new Sequelize("confession", "root", "", {
    host: "localhost",
    dialect: "mysql",
    timezone: '+08:00'
});
exports.UserInfoModel = sequelize.define("UserInfo", {
    uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV1,
        primaryKey: true
    },
    filepath: { type: Sequelize.STRING(200), allowNull: false },
    from_user: { type: Sequelize.STRING(200), allowNull: false },
    to_user: { type: Sequelize.STRING(200), allowNull: false },
    words: { type: Sequelize.TEXT, allowNull: false },
    valid_month: { type: Sequelize.INTEGER, allowNull: false },
    create_time: { type: Sequelize.DATE, allowNull: false },
    expire_time: { type: Sequelize.DATE, allowNull: false }
}, {
    tableName: 'userinfo',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=db.js.map