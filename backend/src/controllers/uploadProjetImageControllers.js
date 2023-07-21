const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/assets/images/projets"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-projets-${file.originalname}`);
  },
});

const upload = multer({ storage });

const uploadProjetImage = (req, res, next) => {
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ])(req, res, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      req.body.image1 = req.files.image1[0].filename;
      req.body.image2 = req.files.image2[0].filename;
      req.body.image3 = req.files.image3[0].filename;
      next();
    }
  });
};

const uploadProjetImageForEdition = (req, res, next) => {
  if (req.query.withImg === "true") {
    upload.single("image")(req, res, (err) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        req.body.image = req.file.filename;
        next();
      }
    });
  } else {
    next();
  }
};

const uploadDataImage = (req, res, next) => {
  upload.single("image")(req, res, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      if (!req.file) {
        req.body.image = null;
      } else {
        req.body.image = req.file.filename;
      }
      next();
    }
  });
};

module.exports = {
  uploadProjetImage,
  uploadProjetImageForEdition,
  uploadDataImage,
};
