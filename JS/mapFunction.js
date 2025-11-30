let nums = [88, 39, 44, 66, 456, 57, 22];
let double = nums.map((num) => (num += num));
console.log(double);

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

const shortData = Anime.map((anime) => {
  return [anime.title, anime.genre];
});

console.log(shortData);
