const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUsers } = require("../controllers/authControllers");
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware')
const {
    verifyOTP
} = require('../controllers/authControllers');


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", protect, admin, getUsers);
router.post('/verify-email', verifyOTP)

module.exports = router;