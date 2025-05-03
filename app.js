const express = require('express');
const kintamasis = require('lodash'); // naudojama pažeidžiama biblioteka
const app = express();
const port = 8080;

// Apsauga: Pašalinam "X-Powered-By"
app.disable('x-powered-by');

// Apsauga: Saugumo antraštės
app.use((req, res, next) => {
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Content-Security-Policy', "default-src 'self'; img-src 'self' https://vilniustech.lt https://vilniustech.lt/images/ https://vilniustech.lt/files/; style-src 'self' 'unsafe-inline'; script-src 'self'; object-src 'none';");
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    next();
});

// GRĖSMĖS IMITACIJA: naudojama pažeidžiama lodash funkcija
const example = kintamasis.merge({a: 1}, {b: 2});

// Paprasta funkcija testavimui
function add(a, b) {
    return a + b;
}

// HTTP atsakymas į "/" adresą
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Baigiamasis darbas</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    background-image: url("https://vilniustech.lt/images/5492/274/13/17_2/Naujienai%20%20-%202024-12-06T104424.310.png");
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
                .topRight {
                    position: absolute;
                    top: 120px;
                    right: 0;
                    width: 900px;
                    font-size: 2rem;
                    font-weight: bold;
                    text-align: center;
                    color: #275196;
                }
                .imageDiv {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    height: 89px;
                    width: 300px;
                    background-image: url('https://vilniustech.lt/files/3844/192/9/6_0/Elektronikos_melynas.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            </style>
        </head>
        <body>
            <div class="imageDiv"></div>
            <div class="topRight">
                Emilis Dovidauskas grupė KTfm-23
                <div>Magistro baigiamasis darbas</div>
                <div>INFRASTRUKTŪRA KAIP KODAS KANALO APSAUGAI</div>
                <div>PROTECTING INFRASTRUCTURE AS A CODE PIPELINE</div>
                <div>2025</div>
            </div>
           // <scriptas>alertas('XSSAS testas');</scriptas> //pakeičiau eilutės sudėtį, nes netgi komentare randa grėsmę
        </body>
        </html>
    `);
});

let server = null;
if (process.env.NODE_ENV !== 'test') {
    server = app.listen(port, () => {
        console.log(`App running on http://localhost:${port}`);
    });
}

process.on('SIGINT', () => {
    console.log('Received SIGINT, shutting down gracefully');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    console.log('Received SIGTERM, shutting down gracefully');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

// Eksportuojame app ir add funkciją testams
module.exports = { app, add };
