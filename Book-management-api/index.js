const express=require("express");

//import database
const database=require("./database");

//initialisation
const bookilicious=express();

//configuaration
bookilicious.use(express.json());

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


/*
Route         :/books/add
Description   :add new book
Access        :PUBLIC
Parameter     :NONE
Methods       :POST
*/
bookilicious.post("/book/add",(req,res)=>{
    const {newBook}=req.body; //destructuring
    database.books.push(newBook);
    return res.json({books:database.books});

});

/*
Route         :/book/update/title
Description   :update book title
Access        :PUBLIC
Parameter     :isbn
Methods       :PUT
*/
// "/book/update/:isbn/title" or "/book/update/:isbn/:title"
bookilicious.put("/book/update/title/:isbn",(req,res)=>{
    //we can use foreach or map
    //foreach updates in database directly
    //map returns new updated array-its expensive since it creates many new array everytime replacing
    /*
    give in postman "put":
    {
    "newBookTitle": "Hello MERN 2nd Edition"
    }
    */
    database.books.forEach((book)=>{
        if(book.ISBN===req.params.isbn){
            book.title=req.body.newBookTitle;
            return;
        }
    });
    return res.json({books: database.books});
});

/*
Route         :/book/update/author
Description   :update/add new author for a book
Access        :PUBLIC
Parameter     :isbn,authorID
Methods       :PUT
*/
bookilicious.put("/book/update/author/:isbn/:authorID",(req,res)=>{
    //update book database:
    database.books.forEach((book)=>{
        if(book.ISBN===req.params.isbn){
            return book.author.push(parseInt(req.params.authorID));//its integer but default string format
        }
    });

    //update author database
    database.author.forEach((author)=>{
        if(author.id===parseInt(req.params.authorID)){
            return author.books.push(req.params.isbn);
        }
    });
    return res.json({books:database.books,author:database.author});
});

/*
Route         :/book/delete
Description   :delete a book
Access        :PUBLIC
Parameter     :isbn
Methods       :DELETE
*/
bookilicious.delete("/book/delete/:isbn",(req,res)=>{
    //filter all arrays which dont match with isbn
    let updatedBookDatabase=database.books.filter((book)=>book.ISBN!==req.params.isbn);

    database.books=updatedBookDatabase;
    return res.json({books:database.books});
});

/*
Route         :/author/add
Description   :add new author
Access        :PUBLIC
Parameter     :NONE
Methods       :POST
*/
bookilicious.post("/author/add",(req,res)=>{
    const {newAuthor}=req.body; //destructuring
    database.author.push(newAuthor);
    return res.json({author:database.author});
});

/*
Route         :/author/update/name
Description   :update author name
Access        :PUBLIC
Parameter     :id
Methods       :PUT
*/
bookilicious.put("/author/update/name/:id",(req,res)=>{
    database.author.forEach((auth)=>{
        if(auth.id===parseInt(req.params.id)){
            auth.name=req.body.newAuthorName;
        }
        return;
    });
    res.json({author:database.author});
});

/*
Route         :/book/delete/author
Description   :delete an author
Access        :PUBLIC
Parameter     :isbn,authorId
Methods       :DELETE
*/
bookilicious.delete("/book/delete/author/:isbn/:authorId",(req,res)=>{
    //update book database
    database.books.forEach((book)=>{
        if(book.ISBN===req.params.isbn){
            const newAuthorList=book.authors.filter((author)=>author.id!==parseInt(req.params.authorId));
            book.authors=newAuthorList;
            return;
        }
    });

    //update author database
    database.author.forEach((auth)=>{
        if(auth.id===parseInt(req.params.authorId)){
            const newBooksList=author.books.filter((book)=>book!=req.params.isbn);
            database.author.books=newBooksList;
            return;
        };
    });
    return res.json({book:database.books,author:database.author,message:"author was deleted"});
});

/*
Route         :/publication/add
Description   :add new publication
Access        :PUBLIC
Parameter     :NONE
Methods       :POST
*/
bookilicious.post("/publication/add",(req,res)=>{
    const newPub=req.body;
    database.publication.push(newPub);
    res.json({publication:database.publication});
});

/*
Route         :/publication/update/name
Description   :update publication name
Access        :PUBLIC
Parameter     :id
Methods       :PUT
*/
bookilicious.put("/publication/update/name/:id",(req,res)=>{
    database.publication.forEach((pub)=>{
        if(pub.id===parseInt(req.params.id)){
            pub.name=req.body.newPubName;
        }
        return;
    });
    return res.json({publication:database.publication});
});

/*
Route         :/publication/update/book
Description   :update/add new book to a publication
Access        :PUBLIC
Parameter     :isbn
Methods       :PUT
removing old publication from books and adding new publication.
*/
bookilicious.put("/publication/update/book/:isbn",(req,res)=>{
    //update the publication database
    database.publication.forEach((publication)=>{
        if(publication.id===req.body.pubId){
            publication.books.push(req.params.isbn);
        }
    });
    //update the books database- publication attribute
    database.books.forEach((book)=>{
        if(book.ISBN===req.params.isbn){
            book.publication=req.body.pubId;
            return;
        }
    });
    return res.json({books:database.books,publication:database.publication});
});

/*
Route         :/book/delete/publication
Description   :delete a book from publication
Access        :PUBLIC
Parameter     :isbn,pubId
Methods       :DELETE
*/
bookilicious.delete("/book/delete/publication/:isbn/:pubId",(req,res)=>{
    //update publication database
    database.publication.forEach((pub)=>{
        if(pub.id===parseInt(req.params.pubId)){
            const newBooksList=publication.books.filter((book)=>book!==req.params.isbn);
            pub.books=newBooksList;
            return;
        }
    });

    //update book database
    //instead of deleting publication , make value as zero
    database.books.forEach((book)=>{
        if(book.ISBN===req.params.isbn){
            book.publication=0;
        }
    });

    return res.json({books:database.books,publication:database.publication});
});

/*
Route         :/publication/delete
Description   :delete a publication
Access        :PUBLIC
Parameter     :isbn,id
Methods       :DELETE
*/

bookilicious.listen(3000,()=>console.log("hey, server is running"));

