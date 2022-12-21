const router = require("express").Router();
const { body } = require("express-validator");
const authentication = require('../middlewares/auth')
const { getUsers, addUser, deleteUser, getUser, updateUser } = require("../controllers/userControllers");

router.get("/", getUsers);

router.get('/:id',authentication,getUser)

router.post(
  "/",
  [
    body("name").isLength({ min: 3 }),
    body("username").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  authentication,
  addUser
);

router.put('/:id',authentication,updateUser)

router.delete('/:id',authentication,deleteUser)

module.exports = router;
