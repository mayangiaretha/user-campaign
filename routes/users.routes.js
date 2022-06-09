import express from 'express';
import UserController from '../controllers/users.js';

const router = express.Router();

router.get('/', UserController.getUsers);

router.post('/', UserController.createUser);

router.get('/:id', UserController.getAUser);

 router.patch('/:id', UserController.upDated);

router.delete ('/:id', UserController.deleteUser);

export default router;
