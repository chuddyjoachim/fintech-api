"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.createUserService = exports.getUserByEmail = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = (0, typeorm_1.getMongoRepository)(User_1.User).findOne({ email: email });
    return user;
});
exports.getUserByEmail = getUserByEmail;
const createUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = (0, typeorm_1.getMongoRepository)(User_1.User).create(user);
    return yield (0, typeorm_1.getMongoRepository)(User_1.User).save(newUser);
});
exports.createUserService = createUserService;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, typeorm_1.getMongoRepository)(User_1.User)
        .find()
        .catch((err) => {
        console.log(err);
    });
    return users;
});
exports.getAllUsers = getAllUsers;
