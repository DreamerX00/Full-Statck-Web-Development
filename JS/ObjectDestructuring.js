//Object destructuring in JavaScript lets you extract properties from objects and assign them to variables using a clean, declarative syntax.

const employee = {
  empName: "Akash Singh",
  position: "SDE",
  task: "Build Scalable Software",
};

const { empName } = employee;

console.log(empName);

//but unlike array we can't do this
const { myName } = empName;
console.log(myName);

let books = {
  title: "The World Of Butter",
  author: "DreamerX",
  genre: ["suspense", "drama"],
};

function getBook({
  title = "No Title",
  author = "No Author",
  price: price = 390,
  unit: unit = 54,
  genre = [gener1, gener2],
}) {
  console.log(
    `Book Name is ${title}\nAuthor Is : ${author}\nPrice Is : ${price} \nUnit is : ${unit}\nGenre Is : ${genre}`
  );
}

getBook(books);

const Anime = [
  {
    title: "Attack on Titan",
    author: "Hajime Isayama",
    seasons: "4",
    duration: "23–25 min per episode",
    genre: ["Action", "Drama", "Fantasy", "Mystery"],
    characters: [
      "Eren Yeager",
      "Mikasa Ackerman",
      "Levi Ackerman",
      "Armin Arlert",
    ],
  },
  {
    title: "Demon Slayer: Kimetsu no Yaiba",
    author: "Koyoharu Gotouge",
    seasons: "4",
    duration: "23 min per episode",
    genre: ["Action", "Supernatural", "Adventure"],
    characters: [
      "Tanjiro Kamado",
      "Nezuko Kamado",
      "Zenitsu Agatsuma",
      "Inosuke Hashibira",
    ],
  },
  {
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",
    seasons: "2",
    duration: "24 min per episode",
    genre: ["Action", "Dark Fantasy", "Supernatural"],
    characters: [
      "Yuji Itadori",
      "Satoru Gojo",
      "Megumi Fushiguro",
      "Nobara Kugisaki",
    ],
  },
  {
    title: "One Piece",
    author: "Eiichiro Oda",
    seasons: "20+",
    duration: "22–24 min per episode",
    genre: ["Adventure", "Fantasy", "Comedy", "Action"],
    characters: ["Monkey D. Luffy", "Zoro", "Nami", "Sanji"],
  },
  {
    title: "Death Note",
    author: "Tsugumi Ohba",
    seasons: "1",
    duration: "23 min per episode",
    genre: ["Psychological", "Thriller", "Supernatural"],
    characters: ["Light Yagami", "L", "Ryuk", "Misa Amane"],
  },
];

const [{ title, author, seasons, duration, genre, characters }, Anime2] = Anime;


console.log(title,author,seasons,duration,genre[0]);
