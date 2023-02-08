const multer = require("multer");
const { verifyToken } = require("./verifyToken");
const router = require('express').Router();
const storage = multer.diskStorage({
    destination: "pages",
    filename: (req, file, cd) => {
      cd(null, req.body.name);
    }
})


const upload = multer({storage: storage});
//router.post("/",verifyToken, upload.single('file'), (req, res) => {
    //res.status(200).json("File has been uploaded");
//});

/*
// Storing the file stream returned from the API 
const responseStream = request.get({
  url: "https://yourAPIwhichWillReturnTheZippedFileStream"
})

// In case of any error 
responseStream.on('error', function (err) {
  if (err) throw err;
})

        // Applying response event for more details visit here https://nodejs.org/api/all.html#http_event_response
        responseStream.pipe(unzipper.Parse())
        .on('entry', function (entry) {
            console.log("entry:::",entry);
            const fileName = entry.path;
            const type = entry.type; // 'Directory' or 'File'
            const size = entry.vars.uncompressedSize; // There is also compressedSize;
            console.log("Type::::",type);
            console.log("Size::::",size);
            console.log("FileName::::",fileName);
            //const type = fileName.split('.')[0]
            //if (fileName === 'zip'){//"yourTargetFile.yourTargetFileExtension") {
            if (type === 'zip'){
                entry.on("data", function (chunk) {
                    console.log("chunk::",chunk.toString()); // This is the content which I required.
                  });                                    
            } else {
            entry.autodrain();
            }
        });*/
/*
// I have updated example as following which is taken from unzipper.
fs.createReadStream('path/to/archive.zip')
  .pipe(unzipper.Parse())
  .on('entry', function (entry) {
    const fileName = entry.path; 
    const type = entry.type; // 'Directory' or 'File'
    const size = entry.vars.uncompressedSize; // There is also compressedSize;
    if (fileName === "yourFileName.yourFileExtension") {
      entry.pipe(fs.createWriteStream('output/path')); // Here you can give output as yourFileName.yourFileExtension or path/yourFileName.yourFileExtension
    } else {
      entry.autodrain();
    }
});*/
router.post("/", (req, res) => {
    //res.status(200).json("File has been uploaded");
    /*const responseStream = request.get({
      url: "https://yourAPIwhichWillReturnTheZippedFileStream"
    })*/

  try{
      res.status(200).json(req.body);
  } catch (err) {
      res.status(500).json(err);
  }
});
module.exports = router;