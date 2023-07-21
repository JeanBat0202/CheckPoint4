const router = require("express").Router();

const projetControllers = require("../controllers/projetControllers");
const uploadProjetImage = require("../controllers/uploadProjetImageControllers");

router.get("/", projetControllers.browse);
router.post("/", uploadProjetImage.uploadProjetImage, projetControllers.add);
router.put("/:id", projetControllers.edit);
router.get("/:id", projetControllers.read);
router.delete("/:id", projetControllers.destroy);

module.exports = router;
