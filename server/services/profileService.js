const fileService = require("./fileService");

const fileName = "profiles.json";

module.exports = {
    getAllProfiles: function () {
        return fileService.getAllElements(fileName);
    },

    getProfileByUsername: function (username) {
        try {
            return fileService.getElement(fileName, u => u.username === username);
        } catch (e) {
            throw new Error(`Profile with username=${username} not found`);
        }
    },

    updateUser: function (username, user) {
        try {
            fileService.updateElement(fileName, user, u => u.username === username);
        } catch (e) {
            throw new Error(`Fail to update profile with username=${username}, reason: "${e.message}"`);
        }
    },

    createProfile: function (profile) {
        try {
            fileService.createElement(fileName, profile);
        } catch (e) {
            throw new Error(`Fail to create profile, reason: "${e.message}"`);
        }
    },

    deleteProfile: function (id) {
        try {
            fileService.deleteElement(fileName, id);
        } catch (e) {
            throw new Error(`Fail to delete profile with id=${id}, reason: "${e.message}"`);
        }
    },
};
