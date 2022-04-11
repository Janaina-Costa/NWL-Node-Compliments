import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AutheticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserCoontroller } from "./controllers/CreateUserCoontroller";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router()

const createUserControlle = new CreateUserCoontroller()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

router.post('/users', createUserControlle.handle)
router.post('/tags',ensureAuthenticated ,ensureAdmin ,createTagController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliment', createComplimentController.handle)

export {router}