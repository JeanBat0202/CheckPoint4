const router = require("express").Router();

const technologieControllers = require("../controllers/technologieControllers");

router.get("/", technologieControllers.browse);

router.post("/", technologieControllers.add);

module.exports = router;
