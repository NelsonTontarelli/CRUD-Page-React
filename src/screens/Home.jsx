import "../styles/Home.css";
import HomeArticle from "../components/HomeArticle";

const articles = [
  {
    id: 1,
    title: "What is this page?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio itaque beatae soluta, praesentium nesciunt dolores reiciendis quas obcaecati perferendis laudantium magni, optio pariatur, officiissunt repellendus suscipit explicabo nam vel.",
  },
  {
    id: 2,
    title: "Who I am?",
    description: "I am the author of this page.",
  },
];

function Home() {
  return (
    <div className="div-container-home">
      {articles.map((art) => (
        <HomeArticle title={art.title} key={art.id} description={art.description}/> 
      ))}
    </div>
  );
}

export default Home;
