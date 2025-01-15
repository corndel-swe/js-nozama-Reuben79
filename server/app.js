import express from "express";
import reviewRouter from "../routers/reviews.js";

const app = express();
app.use(express.json());

app.use("/products", reviewRouter);

export default app;
