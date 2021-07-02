require("dotenv").config();

const express=require("express");

//import database
const database=require("./database/index");

//Models
const BookModel=require("./database/book");
const AuthorModel=require("./database/author");
const PublicationModel=require("./database/publication");

//initialisation
const bookilicious=express();

//mongodb
const mongoose = require('mongoose');

//configuaration
bookilicious.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>console.log("connection established"));

/*
Route         :/
Description   :Get all books
Access        :PUBLIC
Parameter     :NONE
Methods       :GET
*/
bookilicious.get("/", async (req,res)=>{
    const getAllBooks=await BookModel.find();
    return res.json(getAllBooks);
});

/*
Route         :/is
Description   :Get specific books based on ISBN
Access        :PUBLIC
Parameter     :isbn
Methods       :GET
*/
bookilicious.get("/is/:isbn", async (req,res)=>{
    
    const getSpecificBook= await BookModel.findOne({ISBN:req.params.isbn});
    
    if(!getSpecificBook){
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
bookilicious.get("/c/:category", async (req,res)=>{
    
    const getSpecificBook=await BookModel.findOne({category: req.params.category})
    //find() gives all books with given category name
    //compare with each category element since its an array of strings
    if(!getSpecificBook){ //it can result in null
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
bookilicious.get("/l/:language", async (req,res)=>{
    const getSpecificBook= await BookModel.findOne({language: req.params.language});
    if(!getSpecificBook){
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
bookilicious.get("/author", async (req,res)=>{

    const getAuthors= await AuthorModel.find();
    return res.json(getAuthors);
});

/*
Route         :/authorid
Description   :Get specific author
Access        :PUBLIC
Parameter     :authid
Methods       :GET
*/
bookilicious.get("/authorid/:authid", async (req,res)=>{
    const getSpecificAuthor= await AuthorModel.findOne({id: req.params.authid});
    if(!getSpecificAuthor){
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
bookilicious.get("/authbook/:isbn", async (req,res)=>{
    const myisbn=req.params.isbn;
    const getSpecificAuthor= await AuthorModel.findOne({books: {$in:[req.params.isbn]}});
    //compare with each category element since its an array of strings
    if(!getSpecificAuthor){
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
bookilicious.get("/publications", async (req,res)=>{

    const getPublication= await PublicationModel.find();
    return res.json(getPublication);
});

/*
Route         :/pubid
Description   :Get specific publications
Access        :PUBLIC
Parameter     :id
Methods       :GET
*/
bookilicious.get("/pubid/:id", async (req,res)=>{
    const getSpecificPub= await PublicationModel.findOne({id: req.params.id});
    if(!getSpecificPub){
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
bookilicious.get("/pubbooks/:isbn", async (req,res)=>{
    const getSpecificPub= await PublicationModel.findOne({books:{$in:[req.params.isbn]}});
    if(!getSpecificPub){
        return res.json({error:`No publication for the book of isbn:${req.params.isbn}`})
    }
    return res.json({pub: getSpecificPub});
});


/*
Route         :/books/add
Description   :add new book
Access        :PUBLIC
Parameter     :NONE
Methods       :POST
*/
bookilicious.post("/book/add", async (req,res)=>{
    const {newBook}= await req.body; //destructuring
    
    const addNewBook=BookModel.create(newBook);

    return res.json({message: "book was added"});

});

/*
Route         :/book/update/title
Description   :update book title
Access        :PUBLIC
Parameter     :isbn
Methods       :PUT
*/
// "/book/update/:isbn/title" or "/book/update/:isbn/:title"
bookilicious.put("/book/update/title/:isbn", async (req,res)=>{
    /*
    give in postman "put":
    {
    "newBookTitle": "Hello MERN 2nd Edition"
    }
    */
    const updatedBook= await BookModel.findOneAndUpdate({ISBN: req.params.isbn},{title: req.body.bookTitle},{new: true});
    //update takes two arguments, first find, second is update, third is to return new updated data.
    
    return res.json({books: updatedBook});
});

/*
Route         :/book/update/author
Description   :update/add new author for a book
Access        :PUBLIC
Parameter     :isbn
Methods       :PUT
*/
bookilicious.put("/book/update/author/:isbn", async (req,res)=>{
    //update book database:
    const updatedBook= await BookModel.findOneAndUpdate({ISBN: req.params.isbn},{$addToSet: {authors: req.body.newAuthor}},{new: true});

    //update author database
    const updatedAuthor= await AuthorModel.findOneAndUpdate({id: req.body.newAuthor},{$addToSet: {books: req.params.isbn}},{new:true});

    return res.json({books: updatedBook,author: updatedAuthor});
});

/*
Route         :/book/delete
Description   :delete a book
Access        :PUBLIC
Parameter     :isbn
Methods       :DELETE
*/
bookilicious.delete("/book/delete/:isbn", async (req,res)=>{
    //filter all arrays which dont match with isbn
    const updatedBookDatabase= await BookModel.findOneAndDelete({ISBN: req.params.isbn});

    return res.json({message: "Deleted"});
});

/*
Route         :/author/add
Description   :add new author
Access        :PUBLIC
Parameter     :NONE
Methods       :POST
*/
bookilicious.post("/author/add", async (req,res)=>{
    const {newAuthor}= await req.body; //destructuring

    const addNewAuthor = AuthorModel.create(newAuthor);

    return res.json({message: "author was added"});
});

/*
Route         :/author/update/name
Description   :update author name
Access        :PUBLIC
Parameter     :id
Methods       :PUT
*/
bookilicious.put("/author/update/name/:id", async (req,res)=>{
    const updatedAuthor= await AuthorModel.findOneAndUpdate({id: parseInt(req.params.id)},{name: req.body.authName},{new:true});
    
    if(!updatedAuthor){
        return res.json({error: `No author with id : ${req.params.id}`});
    }
    return res.json({author: updatedAuthor});
});

/*
Route         :/book/delete/author
Description   :delete an author
Access        :PUBLIC
Parameter     :isbn,authorId
Methods       :DELETE
*/
bookilicious.delete("/book/delete/author/:isbn/:authorId", async (req,res)=>{
    //update book database
    const UpdatedBook= await BookModel.findOneAndUpdate({ISBN: req.params.isbn},{$pull:{authors: parseInt(req.params.authorId)}},{new: true});

    //update author database
    const updatedAuthor = await AuthorModel.findOneAndDelete({id: parseInt(req.params.authorId)});
    return res.json({book: updatedBook,author: updatedAuthor,message:"author was deleted"});
});

/*
Route         :/publication/add
Description   :add new publication
Access        :PUBLIC
Parameter     :NONE
Methods       :POST
*/
bookilicious.post("/publication/add", async (req,res)=>{
    const {newPub}= await req.body;
    
    const addNewPub= PublicationModel.create(newPub);
    
    res.json({message:"publication was added"});
});

/*
Route         :/publication/update/name
Description   :update publication name
Access        :PUBLIC
Parameter     :id
Methods       :PUT
*/
bookilicious.put("/publication/update/name/:id", async (req,res)=>{
    const updatedPublication= await PublicationModel.findOneAndUpdate({id: parseInt(req.params.id)},{name: req.body.pubName},{new: true});
    if(!updatedPublication){
        return res.json({error: `no publication found for id : ${req.params.id}`});
    }
    return res.json({publication: updatedPublication});
});

/*
Route         :/publication/update/book
Description   :update/add new book to a publication
Access        :PUBLIC
Parameter     :isbn
Methods       :PUT
removing old publication from books and adding new publication.
*/
bookilicious.put("/publication/update/book/:isbn", async (req,res)=>{
    //update the publication database
    const updatePublication= await PublicationModel.findOneAndUpdate({id: req.body.pubId},{$addToSet:{books: req.params.isbn}},{new: true});
    
    //update the books database- publication attribute
    const updatedBook= await BookModel.findOneAndUpdate({ISBN: req.params.isbn},{$addToSet:{publication: req.body.pubId}},{new: true});

    return res.json({message: "book updated to publication"});
});

/*
Route         :/book/delete/publication
Description   :delete a book from publication
Access        :PUBLIC
Parameter     :isbn,pubId
Methods       :DELETE
*/
bookilicious.delete("/book/delete/publication/:isbn/:pubId", async (req,res)=>{
    //update publication database
    const updatedPublication= await PublicationModel.findOneAndUpdate({id: parseInt(req.params.pubId)},{$pull:{books: req.params.isbn}},{new:true});
    
    //update book database
    const updatedBook= await BookModel.findOneAndUpdate({ISBN: req.params.isbn},{publication: 0},{new:true});

    return res.json({message: "book deleted from publication"});
});

/*
Route         :/publication/delete
Description   :delete a publication
Access        :PUBLIC
Parameter     :isbn,pubId
Methods       :DELETE
*/
bookilicious.delete("/publication/delete/:isbn/:pubId", async (req,res)=>{
    //update book database
    const updatedBook= await BookModel.findOneAndUpdate({ISBN: req.params.isbn},{$pull: {publication: req.params.pubId}},{new: true});

    //update publication database
    const updatedPublication= await PublicationModel.findOneAndDelete({id: parseInt(req.params.pubId)});
    
    return res.json({message:"publication was deleted"});

});

bookilicious.listen(3000,()=>console.log("hey, server is running"));

