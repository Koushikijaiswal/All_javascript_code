const express = require('express');
// console.log(express);

const app =express();
const fs = require('fs');
//const { brotliDecompress } = require('zlib');
const bodyParser =require('body-parser');
app.use(bodyParser.json());

function getAllBooks(){
    let data =fs.readFileSync("./books.json",{encoding:'utf-8',flag:'r'});
    return JSON.parse(data);
}

function getAllBooksById(id){
    let data =fs.readFileSync("./books.json",{encoding:'utf-8',flag:'r'});
    let jsondata= JSON.parse(data);
    return jsondata.filter((books)=>books.id ===id);
}

function getAllAuthors(){
    let data =fs.readFileSync("./books.json",{encoding:'utf-8',flag:'r'});
     return JSON.parse(data).map((book)=>book.author);
}

function getAllAuthorById(id){
    let data =fs.readFileSync("./books.json",{encoding:'utf-8',flag:'r'});
    let jsondata= JSON.parse(data);
    return jsondata.filter((author)=>books.id ===id);
}

app.get("/books",function(req,res){
    let books=getAllBooks();
    if(books){
        res.setHeader("Content-type","application/json");
        res.writeHead(200);
        res.end(JSON.stringify(books));
    }
    else{
       res.writeHead(500);
    }
})

app.get("/author",function(req,res){
    let author=getAllAuthors();
    if(author){
        res.setHeader("Content-type","application/json");
        res.writeHead(200);
        res.end(JSON.stringify(author));
    }
    else{
       res.writeHead(500);
    }
})


app.get("/book/:id",function(req,res){
    let book=getAllBooksById(parseInt(req.params.id));
    if(book){
        res.setHeader("Content-type","application/json");
        res.writeHead(200);
        res.end(JSON.stringify(book));
    }
    else{
       res.writeHead(500);
    }
})

app.get("/Allbooks",function(req,res){
    res.writeHead(200);
    res.end(`{
        book1:{['ramayan','mahabharat','bhagwagita']},
        author:{['balmici','wedvaysh','krishna']}
    }`);
});

app.get("/b",function(req,res){
    res.writeHead(200);
    res.end("hey i am in b");
});

app.post("/books",function(req,res){
let success = addBook(req.body);
if(success){
    res.setHeader('content-type','application/json');
    res.writeHead(201);
    res.end(JSON.stringify({success:true}));
    }
    else{
    res.setHeader('content-type','application/json');
    res.writeHead(500);
    res.end(JSON.stringify({success:false}));
    }
});

app.put("/books",function(req,res){

});

function removDuplicate(authors){
    let obj ={};
    for(let author of authors){
        if(!obj[author.name]){
              obj[author.name]=author;
        }
    }
    return Object.values(obj);
}

app.listen(8082,()=>{
    console.log('application started');
});

// import data from './data.json';
// console.log(data);nction