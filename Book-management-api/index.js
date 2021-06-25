const express=require("express");

//import database
const database=require("./database");

//initialisation
const bookilicious=express();

/*
Route         :/
Description   :Get all books
Access        :PUBLIC
Parameter     :NONE
Methods       :GET
*/
bookilicious.get("/",(req,res)=>{
    return res.json({books: database.books});
});

/*
Route         :/is
Description   :Get specific books based on ISBN
Access        :PUBLIC
Parameter     :isbn
Methods       :GET
*/
bookilicious.get("/is/:isbn",(req,res)=>{
    const getSpecificBook=database.books.filter((book)=> book.ISBN===req.params.isbn);

    if(getSpecificBook.length===0){
        return res.json({error:`No Book Found for the ISBN:${req.params.isbn}`});
    }
    return res.json({book: getSpecificBook});
});

/*
Route         :/c
Description   :Get specific books based on category
Access        :PUBLIC
Parameter     :category
Methods       :GET
*/
bookilicious.get("/c/:category",(req,res)=>{
    const getSpecificBook=database.books.filter((book)=>book.category.includes(req.params.category));
    //compare with each category element since its an array of strings
    if(getSpecificBook.length===0){
        return res.json({error: `No book found for the Category: ${req.params.category}`});
    }
    return res.json({book: getSpecificBook});
});

/*
Route         :/l
Description   :Get specific books based on language
Access        :PUBLIC
Parameter     :language
Methods       :GET
*/
bookilicious.get("/l/:language",(req,res)=>{
    const getSpecificBook=database.books.filter((book)=>book.language===req.params.language);
    if(getSpecificBook.length===0){
        return res.json({error:`No book found for language: ${req.params.language}`});
    }
    return res.json({book: getSpecificBook});
});



/*
Route         :/author
Description   :Get all authors
Access        :PUBLIC
Parameter     :NONE
Methods       :GET
*/
bookilicious.get("/author",(req,res)=>{
    return res.json({authors:database.author});
});

/*
Route         :/authorid
Description   :Get specific author
Access        :PUBLIC
Parameter     :authid
Methods       :GET
*/
bookilicious.get("/authorid/:authid",(req,res)=>{
    const getSpecificAuthor=database.author.filter((authors)=>authors.id==req.params.authid);
    if(getSpecificAuthor.length===0){
        return res.json({error:`No author found of id:${req.params.authid}`});
    }
    return res.json({author: getSpecificAuthor});
});

/*
Route         :/authbook
Description   :Get all authors based on books
Access        :PUBLIC
Parameter     :isbn
Methods       :GET
*/
bookilicious.get("/authbook/:isbn",(req,res)=>{
    const getSpecificAuthor=database.author.filter((authors)=>authors.books.includes(req.params.isbn));
    //compare with each category element since its an array of strings
    if(getSpecificAuthor.length===0){
        return res.json({error: `No Author found for the ISBN: ${req.params.isbn}`});
    }
    return res.json({author: getSpecificAuthor});
});

/*
Route         :/publications
Description   :Get all publications
Access        :PUBLIC
Parameter     :NONE
Methods       :GET
*/
bookilicious.get("/publications",(req,res)=>{
    return res.json({data:database.publication});
});

/*
Route         :/pubid
Description   :Get specific publications
Access        :PUBLIC
Parameter     :id
Methods       :GET
*/
bookilicious.get("/pubid/:id",(req,res)=>{
    const getSpecificPub=database.publication.filter((pub)=>pub.id==req.params.id);
    if(getSpecificPub.length===0){
        return res.json({error:`No publication found for the id:${req.params.id}`});
    }
    return res.json({pub: getSpecificPub});
});

/*
Route         :/pubbooks
Description   :Get publications based on books
Access        :PUBLIC
Parameter     :isbn
Methods       :GET
*/
bookilicious.get("/pubbooks/:isbn",(req,res)=>{
    const getSpecificPub=database.publication.filter((pub)=>pub.books.includes(req.params.isbn));
    if(getSpecificPub.length===0){
        return res.json({error:`No publication for the book of isbn:${req.params.isbn}`})
    }
    return res.json({pub: getSpecificPub});
});


bookilicious.listen(3000,()=>console.log("hey, server is running"));

