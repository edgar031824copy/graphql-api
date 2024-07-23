import { User } from "../types";

// harcoded data
export const users: User[] = [
  {
    id: "1",
    name: "Edgar Hernandez",
    email: "edgar@example.com",
    books: ["55", "48"],
  },
  { id: "2", name: "Juan  Perez", email: "juan@example.com", books: [] },
  {
    id: "3",
    name: "Praga Hernandez",
    email: "praga@example.com",
    books: [],
  },
  {
    id: "4",
    name: "Yolanda aguirre",
    email: "yolanda@example.com",
    books: ["55"],
  },
  {
    id: "5",
    name: "Daniela Hernandez",
    email: "Daniela@example.com",
    books: ["48"],
  },
];

export const books = [
  {
    id: "55",
    name: "Book 1",
    category: "suspense",
    published: true,
    authorId: "1",
    author: users.find((item) => item.id === "1"),
  },
  {
    id: "48",
    name: "Book 2",
    category: "comedy",
    authorId: "2",
    published: false,
    author: users.find((item) => item.id === "2"),
  },
];
