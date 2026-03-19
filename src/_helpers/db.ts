import config from '../../config.json';
import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';

export interface Database {
    User: any;
    Employee: any;
    Account: any;
    Department: any;
    Request: any;
}

export const db: Database = {} as Database;

export async function initialize (): Promise<void> {
    const {host, port, user, password, database} = config.database;

const connection = await mysql.createConnection({host, port, user, password});
await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`); 
await connection.end();

const sequelize = new Sequelize(database, user, password, { dialect:  'mysql' });

// load all models
const {default:UserModel} = await import('../users/user.model');
db.User = UserModel(sequelize);

const {default:EmployeeModel} = await import('../employees/employee.model');
db.Employee = EmployeeModel(sequelize);

const {default:AccountModel} = await import('../accounts/account.model');
db.Account = AccountModel(sequelize);

const {default:DepartmentModel} = await import('../departments/department.model');
db.Department = DepartmentModel(sequelize);

const {default:RequestModel} = await import('../requests/request.model');
db.Request = RequestModel(sequelize);

// define associations
db.User.hasMany(db.User, { foreignKey: 'id' }); // if needed, but probably not

db.Employee.belongsTo(db.Account, { foreignKey: 'accountId', allowNull: false });
db.Account.hasOne(db.Employee, { foreignKey: 'accountId' });

db.Employee.belongsTo(db.Department, { foreignKey: 'departmentId' });
db.Department.hasMany(db.Employee, { foreignKey: 'departmentId' });

db.Request.belongsTo(db.Employee, { foreignKey: 'employeeId' });
db.Employee.hasMany(db.Request, { foreignKey: 'employeeId' });

await sequelize.sync({alter: true});

console.log('Database initialized');
}