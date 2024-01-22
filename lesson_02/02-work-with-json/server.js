const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
    switch (action) {
        case "getAll":
            const allBooks = await books.getAll();
            console.log(allBooks);
            break;
        case "getById":
            const oneBook = await books.getById(id);
            console.log(oneBook);
            break;
        case "add":
            const newBooks = await books.add({title, author});
            console.log(newBooks);
            break;
        case "updateById":
            const updatedBooks = await books.updateById({id, title, author});
            console.log(updatedBooks);
            break;
        case "removeById":
            const removedBooks = await books.removeById(id);
            console.log(removedBooks);
            break;
        default:
            console.log("Unknown action");
    }
};

// invokeAction({ action: "getAll" });
// invokeAction({ action: "getById", id: 'ck89qe3HriUDHe09TBoJ81' });
// invokeAction({ action: "add", title: "1984", author: "George Orwell" });
// invokeAction({ action: "updateById", id: 'M-4hjuueAtQAlfEcZ00IH', title: "New title", author: "George Orwell" });
// invokeAction({ action: "removeById", id: 'M-4hjuueAtQAlfEcZ00IH' });
