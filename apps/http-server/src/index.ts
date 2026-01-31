import "dotenv/config";
import app from "./app.js";

app.listen(3001, () => {
  console.log("Server is running on port http://localhost:3001");
});
