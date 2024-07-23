//import { BookModel } from "../models/local-data";
import { BookModel } from "../models/database";

export const getBooks = () => {
  return BookModel.getBooks();
};
