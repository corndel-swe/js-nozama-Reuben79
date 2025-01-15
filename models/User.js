import db from '../db/index.js'

class User {
  static async findAll() {
    const query = `
      select id, username, firstName, lastName, email, avatar, 
      from users
    `
    const results = await db.raw(query)
    return results
  }

  static async findById(id) {
const query = 
      'select id, username, firstName, lastName, email, avatar from users WHERE id = ?'
      const results = await db.raw(query, [id])
      return results[0]
    }

    static async create(newUser) {
      const sql = `INSERT INTO users (username, firstName, lastName, email, avatar, password)
      VALUES (?, ?, ?, ?, ?, ?)`;
      const result = await db.run(sql, [newUser.username, newUser.firstName, newUser.lastName, newUser.email, newUser.avatar, newUser.password]);
  
      
      const createdUser = await db.get(`SELECT id, username, firstName, lastName, email, avatar 
      FROM users WHERE id = ?`, [result.lastID]);
  
      return createdUser;
    }

    static async deleteById(id) {
      const sql = 'DELETE FROM users WHERE id = ?';
      const result = await db.run(sql, [id]);
      return result.changes > 0; 
    }
    static async create(newUser) {
      const sql = `INSERT INTO users (username, firstName, lastName, email, avatar, password)
      VALUES (?, ?, ?, ?, ?, ?)`;
      const result = await db.run(sql, [newUser.username, newUser.firstName, newUser.lastName, newUser.email, newUser.avatar, newUser.password]);
      
      const createdUser = await db.get(`SELECT id, username, firstName, lastName, email, avatar 
      FROM users WHERE id = ?`, [result.lastID]);
      
      return createdUser;
  }

  static async login(username, password) {
      // Get user from database by username
      const user = await db.get(`SELECT id, username, firstName, lastName, email, avatar, password FROM users WHERE username = ?`, [username]);
      
      // If user is not found, return null
      if (!user) return null;
      
      // Check if the password matches (for simplicity, plain text comparison)
      if (user.password !== password) return null;
      
      // Exclude the password from the returned user object
      const { password: userPassword, ...userWithoutPassword } = user;
      
      return userWithoutPassword;
  }
}

  
  

  


export default User
