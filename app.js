const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    background-image: url('https://lt.wikipedia.org/wiki/Vaizdas:VGTU_Saul%C4%97tekis.jpg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    font-family: Arial, sans-serif;
                    color: white;
                }

                .highlight {
                    background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
                    padding: 20px;
                    border-radius: 10px;
                    font-size: 2rem;
                    font-weight: bold;
                    text-align: center;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Adds a shadow around the text */
                }
            </style>
        </head>
        <body>
            <div class="highlight">
                Hello World
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
