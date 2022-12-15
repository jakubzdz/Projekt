const { NULL } = require("mysql/lib/protocol/constants/types");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const express = require("express");
const app = express();
const port = 1090;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "localhost",
  user: "spec",
  password: "w9LmBbFJg(g(mP8m",
  database: "spec",
});

connection.connect();
connection.query("SELECT * FROM dane", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results);
});

var imie = document.getElementById(1).value;
var wiek = document.getElementById(2).value;
var email = document.getElementById(3).value;
var pesel = document.getElementById(4).value;
var telefon = document.getElementById(5).value;
var tytul = document.getElementById(7).value;
var nr = document.getElementById(9).value;

async function abc() {
  query = `INSERT INTO dane(nazwa, email, wiek, pesel, telefon, ksiazka, nr_ksiazki) VALUES ('${imie}','${wiek}','${email}','${pesel}','${telefon}','${tytul}','${nr}')`;

  connection.query(query, function (err, row, fields) {
    if (err) throw err;
  });
}

//   query(
//     `INSERT INTO dane(nazwa, email, wiek, pesel, telefon, ksiazka, nr_ksiazki) VALUES ('${imie}','${wiek}','${email}','${pesel}','${telefon}','${tytul}','${nr}')`
//   );

async function connect() {
  await app.get("/", (req, res) => {
    res.set("Content-Type", "text/html");
    res.sendFile("/home/spec/Jakub_Zdziebko/index.html");
  });

  await app.post("/data", async (req, res) => {
    const name = req.body.imie;
    const surname = req.body.nazwisko;
    const email = req.body.email;
    const pesel = req.body.pesel;

    const tytul = req.body.ksiazka;
    const autor = req.body.wydawca;
    const isbn = req.body.isbn;

    await AddUser(name, surname, email, pesel);
    await AddBook(tytul, isbn, autor);

    res.json(req.body);
    console.log(name);

    connection.end();
  });
}
await app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

connection.end();
