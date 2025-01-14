import db from "../db/index.js";

class Review {
  static async create(userId, productId, rating, reviewText) {
    const query = `INSERT INTO reviews (userId, productId, rating, reviewText) VALUES (?, ?, ?, ?) RETURNING userId, productId, rating, reviewText`;
    const results = await db.raw(query, [
      userId,
      productId,
      rating,
      reviewText,
    ]);
    return results;
  }

  static async findByProductId(productId) {
    const query = `SELECT * FROM reviews WHERE id = ?`;
    const results = await db.raw(query, [productId]);
    return results;
  }

  static async productAverageRating(productId) {
    const query = `SELECT AVG(rating) FROM reviews WHERE productId = ?`;
    const results = await db.raw(query, [productId]);
    console.log(results);
    return results;
  }
}
export default Review;
