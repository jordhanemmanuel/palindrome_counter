import * as express from "express";

//typescript keeps getting error on process.env.PORT without this
declare var process : {
    env: {
        HOST : string,
        PORT : number
    }
}

const app : express.Application = express();
const port : number = process.env.PORT || 80; //for Heroku (may not use, but using here for reference)

app.get('/', function(req,res) {
    res.send('Hello world');
})

app.listen(port, function(err) {
    if (err)
        console.log("Erro encontrado: "+err);
    console.log(`App executando em: http://localhost:${port}`);
})