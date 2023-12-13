
const express = require("express");
require('./db');
const userRouter = require("./routes/user");

const app = express();
app.use(express.json());
app.use("/api/user", userRouter);


app.post("/sign-in",(req, res, next) => 
      { const { email, password } = req.body;
         if (!email || !password){
            return res.json({ Error: "email/ password missing!"});
         }
         next();
      },
      (req, res) => {
      res.send("<h1>Sign-in page😋😋</h1>");
   }
);

app.listen(5000, () => {
   console.log("Server running on port 5000");
   console.log("http://localhost:5000");
});