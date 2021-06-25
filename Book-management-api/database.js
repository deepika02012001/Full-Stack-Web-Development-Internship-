const books=[
    {
        ISBN:"12345book",
        title:"Getting started with MERN",
        pubDate:"2021-07-07",
        language:"en",
        numPage:250,
        author:[1,2],//id of author pointing to author database
        publication:[1],
        category:["tech","programming","education","thriller"],
    }
];

const author=[
    {
        id:1,
        name:"Deepika",
        books:["12345book","1345b"],//isbn of book
    },
    {
        id:2,
        name:"Taarak",
        books:["12345book"],
    }
];

const publication=[
    {
        id:1,
        name:"writex",
        books:["12345book"],
    }
];

module.exports={books,author,publication};
//this file is called module
//exports to export data to index.js