import { Router } from "express";
import Review from "../models/Review.js";

const router = Router();

router.get(`/:productId/reviews`, async (req, res) => {
  if (!req.params.productId) {
    res.sendStatus(400);
  }

  const result = await Review.findByProductId(req.params.productId);
  res.status(200).json(result);
});

router.post(`/:productId/reviews`, async (req, res) => {
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

router.get(`/:productId/reviews/average`, async (req, res) => {
  if (!req.params.productId) {
    res.sendStatus(400);
  }

  const result = await Review.productAverageRating(req.params.productId);
  res.status(200).json(result);
});
export default router;
