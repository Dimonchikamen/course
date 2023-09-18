const profileService = require("../services/profileService");

module.exports = {
    getProfileByUsername: {
        path: "/profile/:username",
        method: "get",
        /**
         * @param req {  Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>> }
         * @param res {  Response<ResBody, LocalsObj> }
         * */
        handler: (req, res) => {
            try {
                const profile = profileService.getProfileByUsername("admin");

                if (profile) {
                    return res.json(profile);
                }

                return res.status(400).json({ message: "Profile not found" });
            } catch (e) {
                return res.status(500).json({ message: e.message });
            }
        },
    },
};
