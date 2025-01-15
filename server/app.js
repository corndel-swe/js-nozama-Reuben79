import express from "express";
import Review from "../models/Review.js";

const app = express();
app.use(express.json());

// You can delete this endpoint
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to Nozama!", time: Date.now() });
});

app.get(`/products/:productId/reviews`, async (req, res) => {
  if (!req.params.productId) {
    res.sendStatus(400);
  }

  const result = await Review.findByProductId(req.params.productId);
  res.status(200).json(result);
});

app.post(`/products/:productId/reviews`, async (req, res) => {
  const productID = req.params.productId;
  const review = {
    userId: req.body.userId,
    productId: Number(productID),
    rating: req.body.rating,
    reviewText: req.body.reviewText,
  };

  const result = await Review.create(review);
  res.status(201).json(result);
});

app.get(`/products/:productId/reviews/average`, async (req, res) => {
  if (!req.params.productId) {
    res.sendStatus(400);
  }

  const result = await Review.productAverageRating(req.params.productId);
  res.status(200).json(result);
});

export default app;
