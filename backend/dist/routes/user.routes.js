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
const express_1 = require("express");
// import { auth } from "../middleware/auth";
const router = (0, express_1.Router)();
const user_controller_1 = require("../controllers/user.controller");
(() => __awaiter(void 0, void 0, void 0, function* () {
    router.get("/", user_controller_1.getAllUser);
    router.post("/register", user_controller_1.createUsers);
}))();
exports.default = router;