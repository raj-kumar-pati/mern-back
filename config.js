import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;

//export const mongoDBURL =
 // 'mongodb+srv://root:root@books-store-mern.c7ba8z1.mongodb.net/books-collection?retryWrites=true&w=majority';
//export const mongoDBURL = 'mongodb://127.0.0.1:27017/locals';
 export const mongoDBURL = process.env.mongoDBURL;
// Please create a free database for yourself.
// This database will be deleted after tutorial