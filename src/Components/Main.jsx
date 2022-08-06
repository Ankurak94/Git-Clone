import { useEffect, useState} from "react";
import axios from "axios";
import Card from "../CardComponent/Card";
import Navbar from "../NavBar/Navbar";
import Header from "../CardComponent/Header";
import SearchBar from "../NavBar/SearchBar";

function Main({ user }) {
  const [gitRepo, setGitRepo] = useState(null)
  const url = `https://api.github.com/users/${user}/repos`;
//   let respPromise = axios(url);
//   let gitdata = []
//   const data = () => {
//     respPromise
//       .then((resp) => {
//         gitdata.length >= 0 && gitdata.push(resp.data);
//     })
//     .catch((e) => {
//         console.log("Error", e);
//     });
// };
useEffect(() => {
  axios(url).then((resp) => {
    setGitRepo(resp.data);
  });
}, []);
console.log('gitdata',gitRepo);
  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
        {gitRepo && gitRepo.map((repo) =>{ return(<Card key={repo.id} data={repo} />)})}
    </div>
  );
}

export default Main;
