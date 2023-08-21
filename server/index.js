const fs = require("fs");
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise(res => {
        const randomMs = Math.max(700, Math.random() * 1000);
        setTimeout(res, randomMs);
    });
    next();
});

server.post("/login", (req, res) => {
    try {
        const { username, password } = req.body;
        const users = JSON.parse(fs.readFileSync(path.resolve(__dirname, "users.json"), { encoding: "utf-8" }));

        const userFromDb = users.find(u => u.username === username && u.password === password);

        if (userFromDb) {
            return res.json(userFromDb);
        }

        return res.status(400).json({ message: "invalid login or password" });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: "auth error" });
    }

    next();
});

server.use(router);

server.listen(8000);
