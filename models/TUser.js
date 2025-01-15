import db from '../db/index.js'
class User {

    static async create(newUser) {
      const sql = `INSERT INTO users (username, firstName, lastName, email, avatar, password)
      VALUES (?, ?, ?, ?, ?, ?)`;
      const result = await db.run(sql, [newUser.username, newUser.firstName, newUser.lastName, newUser.email, newUser.avatar, newUser.password]);
  
      
      const createdUser = await db.get(`SELECT id, username, firstName, lastName, email, avatar 
      FROM users WHERE id = ?`, [result.lastID]);
  
      return createdUser;
    }
  }
  
  module.exports = User;
  