const Sequelize = require("sequelize");
// 建立连接，参数分别是数据库名，用户名，密码
const sequelize = new Sequelize("confession", "root", "", {
    host: "localhost",
    dialect: "mysql",  //数据库类型：'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql'
    timezone: '+08:00' //时区转换
});

// 定义UserInfoModel
export const UserInfoModel = sequelize.define("UserInfo", {
    uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV1,
        primaryKey: true
    },
    // 文件路径
    filepath: { type: Sequelize.STRING(200), allowNull: false },
    // 谁写的
    from_user: { type: Sequelize.STRING(200), allowNull: false },
    // 写給谁
    to_user: { type: Sequelize.STRING(200), allowNull: false },
    // 表白文字
    words: { type: Sequelize.TEXT, allowNull: false },
    // 有效期
    valid_month: { type: Sequelize.INTEGER, allowNull: false },
    // 创建时间
    create_time: { type: Sequelize.DATE, allowNull: false },
    // 过期时间
    expire_time: { type: Sequelize.DATE, allowNull: false }
}, {
    tableName: 'userinfo',  // 指定表名为userinfo
    createdAt: false,
    updatedAt: false
});

// 新建数据表
// UserInfoModel.sync({ force: true });