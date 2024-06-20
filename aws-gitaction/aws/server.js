// This is an example of running the Lambda function locally using Express.js
const express = require('express');
const bodyParser = require('body-parser');
const sharp = require('sharp');

const app = express();
const port = 3000;

// Middleware to handle JSON data
app.use(bodyParser.json({ limit: '10mb' }));

app.post('/resize', async (req, res) => {
    try {
        // Assuming the base64 encoded image is sent as a JSON property "image"
        const inputBuffer = Buffer.from(req.body.image, 'base64');

        const outputBuffer = await sharp(inputBuffer)
            .resize(100, 100)  // You can adjust the dimensions as needed
            .toBuffer();

        const outputBase64 = outputBuffer.toString('base64');

        res.status(200).send({
            image: outputBase64,
            contentType: 'image/jpeg',
            isBase64Encoded: true
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error processing image' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});