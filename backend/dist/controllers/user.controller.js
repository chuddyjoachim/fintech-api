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
exports.getAllUser = exports.createUsers = void 0;
const auth_service_1 = require("../services/auth.service");
const user_service_1 = require("../services/user.service");
// create user controller
const createUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body.user;
    const hashedPassword = yield (0, auth_service_1.getHashedPassword)(user.password);
    //   check if user exist in database
    const ExistingUser = yield (0, user_service_1.getUserByEmail)(user.email);
    if (ExistingUser) {
        return res.status(400).json({ msg: "user already exist" });
    }
    const newUser = yield (0, user_service_1.createUserService)(Object.assign(Object.assign({}, user), { password: hashedPassword }));
    return res.status(200).json({ newUser });
});
exports.createUsers = createUsers;
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, user_service_1.getAllUsers)();
    let userProperty;
    if (users) {
        userProperty = users.map((user) => ({
            id: user.id,
            email: user.email,
            username: user.name,
        }));
    }
    return res.json(userProperty);
});
exports.getAllUser = getAllUser;
