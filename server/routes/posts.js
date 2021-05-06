import express from 'express';
const router = express.Router();
import { getPosts, createPosts, updatePost } from '../controllers/posts.js'

router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePost);


export default router;