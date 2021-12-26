import { Router } from "express";
const router: Router = Router();

router.get('/', (req, res) => {
    res.send('Hellow World');
});

export default router;