import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public")); 
app.use(express.static("images")); // this is very important line to avoid mime type error
app.use(bodyParser.urlencoded({ extended: true }));


// your code here -> 


app.get("/", (req, res) => {
    res.render("index.ejs");
});


app.listen(port, () => {
    console.log(`server is up and running on ${port}`);
});

