import db from '../db/index.js'

class Products {
    static async findAll() {
      const query = "SELECT * FROM products;";
      const result = await db.raw(query);
      return result  
    }

    static async findById(id) {

        const query = `select id, name, description, price, stockQuantity, imageURL 
        FROM users 
        WHERE id = ?`
        const results = await db.raw(query, [id])
        return results[0]
      }
    
  
    static async insertProduct(product) {
        const query = `
            INSERT INTO products (id, name, description, price, stockQuantity, imageURL)
            VALUES (?, ?, ?, ?, ?, ?)
            RETURNING *;
        `;
        const values = [product.id, product.name, product.description, product.price, product.stockQuantity, product.imageURL];
        const results = await db.raw(query, values);
        return results[0];
    }

    static async findByCategory(category) {
        const query = `SELECT id, name, description, price, stockQuantity, imageURL
        FROM products
        WHERE category = ?`
        const results = await db.raw(query, [category])
        return results;

    }
}


  export default Products
  

  