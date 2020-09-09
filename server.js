const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/cats', (req, res) => {
    res.render('cats');
});

app.get('/smokey', (req, res) => {
    var infoArray =
        {id: "cat1" , name: "Smokey", personality: "skittish", personalityInfo: "Needs hiding spots at home. Gets stressed out easily.", faveFood: "tuna"};
    res.render('details', { info: infoArray });
});


app.get('/sassy', (req,res) =>{
    var infoArray = 
        {id: "cat2", name: "Sassy", personality: "outgoing", personalityInfo: "Needs additional toys and playtime.", faveFood: "chicken" };
    res.render('details', { info: infoArray });
});

app.get('/patch', (req, res) =>{
    var infoArray =
        {id: "cat3", name: "Patch", personality: "dominant", personalityInfo: "Have difficulties with other cats.", faveFood: "mouse" };
    res.render('details', { info: infoArray });
});


app.get('/oscar', (req, res) =>{
    var infoArray =
        {id: "cat4", name: "Oscar", personality: "outgoing", personalityInfo: "Needs additional toys and playtime.", faveFood: "salmon" };
    res.render('details', { info: infoArray });
});

app.listen(8000, () => console.log("listening on port 8000"))