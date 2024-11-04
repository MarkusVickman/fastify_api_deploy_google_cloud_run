//lägger till express och cors
const express = require('express');
const cors = require('cors');

//Inställningar för express
const app = express();
const port = 3000;

//stöd för ta json-format och tillåter tillgång från andra sidor
app.use(express.json());
//lägger till cors för att kunna ansluta från vilken adress som helst
app.use(cors());

//Startar servern
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

//Endast för att kontrollera om servern är igång
app.get("/", (req, res) => {
    res.status(200).json({ message: "Api-server is up and running on Google Cloud Run //Markus"});
});

