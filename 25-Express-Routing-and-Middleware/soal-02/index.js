const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

// Middleware
const loggerMiddleware = (req, res, next) => {
  console.log("this is logger");
  next();
};
const postMiddleware = (req, res, next) => {
  const allowedSpesies = ["kucing", "anjing", "kelinci"];
  const { spesies } = req.body;
  const isExist = allowedSpesies.includes(spesies);

  isExist ? next() : res.status(400).send({ error: "Spesies not valid" });
};

app.use(loggerMiddleware);

const hewan = [
  { id: 1, nama: "Snowy", spesies: "kucing" },
  { id: 2, nama: "Blacki", spesies: "anjing" },
  { id: 3, nama: "Molly", spesies: "kucing" },
  { id: 4, nama: "Milo", spesies: "kelinci" },
  { id: 5, nama: "Rere", spesies: "kucing" },
];

// Get all `hewan`
app.get("/hewan", (req, res) => {
  res.status(200).send(hewan);
});

// Create new `hewan`
app.post("/hewan", postMiddleware, (req, res) => {
  const id = hewan.length + 1;
  const { nama, spesies } = req.body;

  hewan.push({ id, nama, spesies });

  const data = {
    message: "success adding one pets",
    hewan,
  };

  res.status(201).send(data);
});

// Get `hewan` by id
app.get("/hewan/:id", (req, res) => {
  const { id } = req.params;
  const hewanFilter = [hewan?.find((h) => h.id == id)];

  const data = {
    message: "success get data Pet",
    hewanFilter,
  };

  res.status(200).send(data);
});

// Update `hewan` by id
app.put("/hewan/:id", (req, res) => {
  const { id } = req.params;
  const { nama, spesies } = req.body;
  const index = hewan?.findIndex((h) => h.id == id);

  hewan[index] = { id, nama, spesies };

  const data = {
    message: "success update data Pet",
    hewan,
  };

  res.status(200).send(data);
});

// Delete `hewan` by id
app.delete("/hewan/:id", (req, res) => {
  const { id } = req.params;
  const index = hewan?.findIndex((h) => h.id == id);

  hewan?.splice(index, 1);

  const data = {
    message: "success delete data Pet",
    hewan,
  };

  res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
