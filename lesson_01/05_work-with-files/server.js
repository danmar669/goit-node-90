const fs = require("fs/promises");

const filePath = "./data.txt";

const fileOperation = async ({ action }) => {
    switch (action) {
        case "read":
            // first variant
            // const result = await fs.readFile(filePath)
            // const text = result.toString()
            // console.log(text)

            // secon variant
            // const result = await fs.readFile(filePath, {encoding: 'utf-8'})
            const result = await fs.readFile(filePath, "utf-8");
            console.log(result);
            break;
        case "add":
            const append = await fs.appendFile(filePath, " unknow");
            console.log(append);
            break;
        case "replace":
            const newFile = await fs.writeFile(filePath, "В мене за спиною є крилі ім'я котрим наполеглевість");
            console.log(newFile);
            break;
        case "rename":
            const newFileName = await fs.rename(filePath, "./newData.txt");
            console.log(newFileName);
            break;
        case "delete":
            const deletedFile = await fs.unlink('./newData.txt');
            console.log(deletedFile);
            break;
        default:
            console.log("Unknown action");
            break;
    }
};

// fileOperation({action: 'read'})
// fileOperation({action: 'add'})
// fileOperation({ action: "replace" });
// fileOperation({ action: "rename" });
fileOperation({ action: "delete" });
