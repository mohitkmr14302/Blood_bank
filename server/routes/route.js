import express from "express";
import { saveprofile, loginprofile, logout, getprofile, updatepost } from '../controller/profile-controller.js'
import { createpost, userpost, deletepost } from '../controller/post-controller.js';
import { createappointt, userappoint, deleteappointment } from '../controller/appoint-controller.js'

import auth from '../middleware/auth.js'
const router = express.Router();
const app = express();

router.post('/create', auth, createpost);
router.post('/appoint', auth, createappointt);
router.post('/profile', saveprofile);
router.get('/login/:email', loginprofile);
router.get('/logout', auth, logout);
router.get('/userprofile', auth, getprofile);
router.post('/update/:id', auth, updatepost);
router.get('/userpost', auth, userpost);
router.get('/userappoint', auth, userappoint);
router.delete('/delete/:id', auth, deletepost);
router.delete('/deleteappoint/:id', auth, deleteappointment);
export default router;