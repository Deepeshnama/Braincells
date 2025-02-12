import express from "express";
import { fetchUsers, getAllUsers } from "../controllers/user.controller.js";

const routes = express.Router();

routes.get("/users", getAllUsers);

export default routes;
