import { Request,Response } from 'express';

import { Book } from '../model/bookModel';


export const getAllBooks = async (_: Request,res: Response) => {


    const books = await Book.findAll();
    console.log("hi")
    res.json(books);
}


export const createBook = async (req: Request,res: Response) => {


    const  { title,author } = req.body;

    const BookCreate = await Book.create ({ title,author });

    res.status(201).json(BookCreate)
}


// export const createBook = async (req: Request, res: Response) => {
//   try {
//     const { title, author, available } = req.body;

//     if (!title || !author) {
//       return res.status(400).json({ error: "Title and author are required" });
//     }

//     const book = await Book.create({ title, author, available });
//     res.status(201).json(book);
//   } catch (error) {
//     console.error("Error creating book:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
