import app from "./app.js";
import "./database/databaseConnection.js";

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at: http://localhost:${port}`);
});
