const fileService = require("./fileService");
const { randomUUID, createCipher } = require("crypto");

const fileName = "users.json";

const algorithm = "aes256";
const key = "passsqweqwe12e12e12e1e21e2wdasda";

module.exports = {
    findUserById: function (id) {
        return fileService.getElement(fileName, u => u.id === id);
    },

    findUserByUsername: function (username) {
        return fileService.getElement(fileName, u => u.username === username);
    },

    checkUser: function (username, password) {
        const cipher = createCipher(algorithm, key);
        const hash = cipher.update(password, "utf8", "hex") + cipher.final("hex");
        return fileService.getElement(fileName, u => u.username === username && u.password === hash);
    },

    createUser: function (username, password) {
        const users = fileService.getAllElements(fileName);
        if (users.find(u => u.username === username)) {
            return undefined; //throw new Error(`User with username=${username} is exist`);
        }
        const cipher = createCipher(algorithm, key);
        const hash = cipher.update(password, "utf8", "hex") + cipher.final("hex");
        fileService.createElement(fileName, {
            id: randomUUID(),
            username,
            password: hash,
        });
    },

    updateUser: function (username, user) {
        fileService.updateElement(fileName, user, u => u.username === username);
    },

    deleteUser: function (id) {
        fileService.deleteElement(fileName, id);
    },
};
