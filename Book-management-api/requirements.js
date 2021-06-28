//requirements for this project

/*

we are a book management company called "Bookilicious"

It contains:
1.Books
(attributes)
ISBN-book id
book title
published date
language
number of pages
author name[]
category[]

2.Authors
(attributes:)
id
author name
books[] (single or multiple books)

3.Publications
(attributes:)
id
name
books[] (definitely publishes multiple books)

objective:
"purchase book from author, make copies and sell them to users as publications"

---->APIs needed
1. Books
//GET
to get all books
to get specific books
to get list of books based on category
to get list of books based on languages

//POST
add new book

//PUT
update book title
update/add new author (array in book)

//DELETE
delete a book
delete an author

2. Authors
to get all authors
to get specific author
to get list of authors based on books

//POST
add new author

//PUT
update author name
(since we are updating or adding new author in book, its mandatory to update author too at that time)

//DELETE
delete an author
(delete a book in author not necessary since we remove an author in books)

3. Publication
to get all publications
to get specific publications
to get list of publications based on books

//POST
add new publication

//PUT
update publication name
updating or adding new books in publication

//DELETE
delete a publication
delete a book from publication

*/

/*
create data in another js file

how the server serves the requests
*/