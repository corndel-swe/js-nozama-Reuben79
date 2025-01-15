import db from '../db/index.js'
class User {
  
    static async deleteById(id) {
      const sql = 'DELETE FROM users WHERE id = ?';
      const result = await db.run(sql, [id]);
      return result.changes > 0; 
    }
  }
  
  module.exports = User;
  