import { Router } from 'express';


import { getAllBooks,createBook  } from '../controllers/book.controller';


const router = Router();


router.get('/',getAllBooks);


router.post('/',createBook);


export default router;