const {createReadStream} = require('fs')
const {join} =require('path')
const express = require('express')
const router = express.Router()

const chatWoodWook = async (req, res) => {
    const body = req.body
    console.log(body)
    res.sed(body)
}
router.post('/chatwood-hook', chatWoodWook)
router.get("/get-qr", async (_, res) => {
    const YOUR_PATH_QR = join(process.cwd(), `bot.qr.png`);
    const fileStream = createReadStream(YOUR_PATH_QR);

    res.writeHead(200, { "Content-Type": "image/png" });
    fileStream.pipe(res);
  });

module.exports =  router 