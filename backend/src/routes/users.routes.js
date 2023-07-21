const router = require("express").Router();

const userControllers = require("../controllers/userControllers");

router.get("/", userControllers.browse);
router.get("/:id", userControllers.read);

router.post(
  "/",
  userControllers.hashPassword,
  userControllers.add,
  userControllers.read
);
router.post("/login", userControllers.login);

module.exports = router;
