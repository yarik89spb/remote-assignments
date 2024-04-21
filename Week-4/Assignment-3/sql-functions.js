const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config()

const pool = mysql.createPool({ 
    host: process.env.MYSQL_HOST, 
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD, 
    database: process.env.MYSQL_DATABASE,
}).promise() 

async function addUser(user_name, user_password){
    try {
        await pool.query(`INSERT INTO user (user_email, user_password) VALUES (?, ?);`, [user_name, user_password])
    } catch (error){
        console.error(error);
        throw error;
    }
}

async function getUserPassword(user_name){
    try {
        const [user_password_query] = await pool.query(`SELECT user_password FROM user WHERE user_email = ?;`, [user_name])
        const user_password = user_password_query[0].user_password
        return user_password;
    } catch (error){
        console.error(error);
        throw error;
    }
}

module.exports = { addUser, getUserPassword };