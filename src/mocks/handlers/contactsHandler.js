import { rest } from "msw";

const mockContactsData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 25,
    photo: "john.jpg",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 30,
    photo: "jane.jpg",
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Johnson",
    age: 35,
    photo: "michael.jpg",
  },
];

export const fetchContactHandler = rest.get("/contact", (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      message: "GET ALL CONTACTS",
      data: mockContactsData,
    })
  );
});

export const createContactHandler = rest.post("/contact", (req, res, ctx) => {
  return res(ctx.status(201));
});

export const fetchContactHandlerEmpty = rest.get("/contact", (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json({
      message: "GET ALL CONTACTS",
      data: [],
    })
  )
);

export const contactHandlers = [fetchContactHandler, createContactHandler];
