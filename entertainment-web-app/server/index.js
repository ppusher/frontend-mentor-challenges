import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import movieRoutes from "./routes/movieRoutes.js";
import multiRoutes from "./routes/multiRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";
import tvShowRoutes from "./routes/tvShowRoutes.js";

dotenv.config();
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(cors());

// app.use('/api/users', userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/tvshows", tvShowRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/multi", multiRoutes);

// catch-all route?
app.get("*", (req, res) => {
  res.send(`Nothing to see at ${req.params[0]}`);
});

app.get("/", (req, res) => {
  res.send("API Server OK");
});

app.listen(port, () => console.log(`Server started on port ${port}`));
