import db from "../db/index.js";

class Review {
  static async findByProductId(productId) {
    const query = `SELECT * FROM reviews WHERE id = ?`;
    const results = await db.raw(query, [productId]);
    return results;
  }

  static async create(review) {
    const query = `INSERT INTO reviews (productId, userId, rating, reviewText) VALUES (?, ?, ?, ?) RETURNING *`;
    const results = await db.raw(query, [
      review.productId,
      review.userId,
      review.rating,
      review.reviewText,
    ]);
    return results[0];
  }

  static async productAverageRating(productId) {
    const query = `SELECT AVG(rating) FROM reviews WHERE productId = ?`;
    const results = await db.raw(query, [productId]);
    return results[0]["AVG(rating)"];
  }
}
export default Review;
