import express from "express";

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hello World!");
});



import userRoute from "./routes/user.route.ts";
app.use("/user", userRoute);

export default app;
