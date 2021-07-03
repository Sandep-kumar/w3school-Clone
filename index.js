const http=require('http');
const fs=require('fs');


const home=fs.readFileSync("index.html");
const html=fs.readFileSync("html.html");
const css=fs.readFileSync("css.html");



const hostname='127.0.0.1';
const port = 80;

const server=http.createServer((req, res)=>{
    console.log(req.url);
    url=req.url;
    res.statusCode=200;
    res. setHeader('Content-type','text/html');
    // if(url=='index.html'){
    //     res.end(home);
    // }
    // else if(url=='html.html'){
    //     res.end(html);
    // }
    // else if(url=='css.html'){
    //     res.end(css);
    // }
    // else
    // {
    //     res.statusCode=404;
    //     res.end("<h1>404 not Found<h1>")
    // }
});
server.listen(port, hostname, ()=>{
console.log(`Server runnning at http://${hostname}:${port}/`);
});