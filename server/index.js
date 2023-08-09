const fs = require("fs");
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(async (req, res, next) => {
    await new Promise(res => {
        const randomMs = Math.max(0.5, Math.random()) * 100;
        setTimeout(res, randomMs);
    });
    next();
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: "auth error" });
    }

    next();
});

server.use(jsonServer.defaults());
server.use(router);

server.post("/login", (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(String(fs.readFileSync(path.resolve(__dirname, "users.json"), { encoding: "utf-8" })));
    const { users } = db;
    const userFromDb = users.find(u => u.username === username && u.password === password);

    if (userFromDb) {
        return res.json(userFromDb);
    }

    return res.status(400).json({ message: "invalid login or password" });
});

server.listen(5000, () => {
    console.log("server start in 5000 port!");
});
