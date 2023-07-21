const router = require("express").Router();

const roleControllers = require("../controllers/roleControllers");

router.get("/", roleControllers.browse);

router.post("/", roleControllers.add);

module.exports = router;
