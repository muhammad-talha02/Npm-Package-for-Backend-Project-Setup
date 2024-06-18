import { app } from "./app.js";
import connecDB from "./utils/db.js";
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connecDB()
  });