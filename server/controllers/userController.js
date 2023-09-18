const userService = require("../services/userService");

module.exports = {
    login: {
        path: "/login",
        method: "post",
        /**
         * @param req {  Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>> }
         * @param res {  Response<ResBody, LocalsObj> }
         * */
        handler: (req, res) => {
            try {
                const { username, password } = req.body;

                const user = userService.checkUser(username, password);

                if (user) {
                    const result = { ...user };
                    delete result["password"];
                    return res.json(result);
                }

                return res.status(400).json({ message: "invalid login or password" });
            } catch (e) {
                return res.status(500).json({ message: e.message });
            }
        },
    },

    changeUsername: {
        path: "/change-username",
        method: "put",
        /**
         * @param req {  Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>> }
         * @param res {  Response<ResBody, LocalsObj> }
         * */
        handler: (req, res) => {
            try {
                const { id, username, password } = req.body;

                const user = userService.findUserById(id);

                if (!user || !userService.checkUser(user.username, password)) {
                    return res.status(400).json({ message: "invalid login or password" });
                }

                userService.updateUser(user.username, { username });
                const result = { ...user, username };
                delete result["password"];
                return res.json(result);
            } catch (e) {
                return res.status(500).json({ message: e.message });
            }
        },
    },
};
