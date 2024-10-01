import data from "./data.json";
import ArticleCard from "./components/articleCard.js"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className = {styles.pageWrapper}>
      <h1>Articles</h1>
      {data.map((article,i) => (
        <ArticleCard
          key={i}
          blurb={article.blurb}
          id={article.id}
          image={article.image}
          publishedDate={article.publishedDate}
          title={article.title}/>
        ))} 
    </main>
  );
}
