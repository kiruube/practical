const express = require("express");
const router = express.Router();

const AdminRegister = require("../models/AdminRegister");

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  try {
    const admin = new AdminRegister(req.body);
    await AdminRegister.register(admin, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/register");
    });
  } catch (error) {
    res.status(400).send("Sorry! Something went wrong!");
  }
});

module.exports = router;
