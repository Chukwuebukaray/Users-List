import { useState } from "react";

import Chelsey from "./assets/Chelsey Dietrich.jpg";
import Clementina from "./assets/Clementina DuBuque.jpg";
import Clementine from "./assets/Clementine Bauch.jpg";
import Ervin from "./assets/Ervin Howell.jpg";
import Glenna from "./assets/Glenna Reichert.jpg";
import Leanne from "./assets/Leanne Graham.jpg";
import Kurtis from "./assets/Kurtis Weissnat.jpg";
import Dennis from "./assets/Mrs. Dennis Schulist.jpg";
import Nicholas from "./assets/Nicholas Runolfsdottir V.jpg";
import Patricia from "./assets/Patricia Lebsack.jpg";

function App() {
  const List = [
    {
      img: Leanne,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      img: Ervin,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      img: Clementine,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      img: Patricia,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      img: Chelsey,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      img: Dennis,
      name: "Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      img: Kurtis,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      img: Nicholas,
      name: "Nicholas Rudolph",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      img: Glenna,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      img: Clementina,
      name: "Tina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];

  const [usersList, setUsersList] = useState(List);

  const handleShuffle = () => {
    const newUsersList = [...usersList];
    let i = newUsersList.length;
    let randomIndex;

    while (i > 0) {
      randomIndex = Math.floor(Math.random() * i);
      i--;
      [newUsersList[i], newUsersList[randomIndex]] = [
        newUsersList[randomIndex],
        newUsersList[i],
      ];
    }

    setUsersList(newUsersList);
  };

  return (
    <>
      <div>
        <h1>Users List</h1>
        <ul>
          {usersList.map((user, idx) => {
            return (
              <li key={idx}>
                <img src={user.img} alt="userimage" />
                <div>
                  <h2>{user.name}</h2>
                  <p className="username">{user.username}</p>
                  <p className="email">{user.email}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <button onClick={handleShuffle}>Shuffle</button>
      </div>
    </>
  );
}

export default App;
