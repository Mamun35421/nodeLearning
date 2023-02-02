const http = require('http');
const fs = require('fs');
const { hostname } = require('os');
const PORT = 3000;

const server = http.createServer((req,res)=>{
    const handleReadFile = (statusCode, fileLocation) =>{

        fs.readFile(fileLocation,(err,data)=>{
            res.writeHead(statusCode, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    };

    if(req.url === "/"){
        handleReadFile(200,"./views/Home.html");
    }else if(req.url === "/about"){
        handleReadFile(200, "./views/About.html");
    }else if (req.url === "/contact"){
        handleReadFile(200,"./views/Contact.html");
    } else{
        handleReadFile(200,"./views/Eror.html")
    }
});

server.listen(PORT,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${PORT}`);
});
