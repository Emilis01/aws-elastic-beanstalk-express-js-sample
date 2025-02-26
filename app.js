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
                .topRight{
                    position: absolute;  
                    top: 120px;                  
                    right: 0;
                    width: 900px;
                    height: auto;                                     
                    font-size: 2rem;
                    font-weight: bold;
                    text-align: center;
                    color:#275196;                    
                }
                .imageDiv {
                  position: absolute;
                  top: 10px;
                  right: 10px;
                  height: 89px; /* Explicit height */
                  width: 300px; /* Explicit width */
                  background-image: url('https://vilniustech.lt/files/3844/192/9/6_0/Elektronikos_melynas.png');
                  background-size: contain; /* Ensures the image scales within the div */
                  background-repeat: no-repeat;
                  background-position: center;
                }               
            </style>
        </head>
        <body>      
            <div class="imageDiv"> </div>
            <div class="topRight">Emilis Dovidauskas grupė KTfm-23
            <div >Magistro baigiamasis darbas
            <div >INFRASTRUKTŪRA KAIP KODAS KANALO APSAUGAI
            <div >PROTECTING INFRASTRUCTURE AS A CODE PIPELINE
            <div >2025</div></div></div></div></div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
