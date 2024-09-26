import Link from "next/link";
import styles from "../page.module.css";
import { formatDateForArticle } from "./util";

export default function Article({
    blurb, 
    id, 
    image, 
    publishedDate, 
    title,}) {
    return (
      <div className={styles.articleCardWrapper}>
        <img src = {image.url} alt ={image.alt}/>
        <div className={styles.articleCardText}>
            <h2>{title}</h2>
            <p className={styles.articleCardDate}>{formatDateForArticle(publishedDate)}</p>
            <p>{blurb}</p>
            <Link href={`article/${id}`}>Read More</Link>
        </div>
      </div>
    );
  }