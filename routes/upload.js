const multer = require("multer");
const { verifyTokenAndAuthorization } = require("./verifyToken");
const router = require('express').Router();
const storage = multer.diskStorage({
    destination: "images",
    filename: (req, file, cd) => {
      cd(null, req.body.name);
    }
})
const upload = multer({storage: storage});
router.post("/:id", verifyTokenAndAuthorization, upload.single('img'), (req, res) => {
    res.status(200).json("File has been uploaded");
});
module.exports = router;
