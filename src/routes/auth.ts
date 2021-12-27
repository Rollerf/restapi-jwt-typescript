import { Router } from "express";
const router: Router = Router();

import {signup, signin, profile, testing} from '../controllers/auth.controller';
import {TokenValidation} from '../libs/verifyToken';

router.post('/signup', signup);
router.post('/signin', signin);

router.get('/profile', TokenValidation, profile);
router.get('/testing', TokenValidation, testing);

export default router;