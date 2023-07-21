const express = require("express");

const router = express.Router();

const projetsRouter = require("./projets.routes");
const rolesRouter = require("./roles.routes");
const usersRouter = require("./users.routes");
const technologiesRouter = require("./technologies.routes");

router.use("/roles", rolesRouter);

router.use("/projets", projetsRouter);

router.use("/users", usersRouter);

router.use("/technologies", technologiesRouter);

module.exports = router;
