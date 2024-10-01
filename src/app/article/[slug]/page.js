import data from "../../data.json";
import styles from "../../page.module.css"
import ArticleTextDisplay from "@/app/components/ArticleTextDisplay";
import { formatDateForArticle } from "@/app/components/util";

export default function Article({params}){
    const slug = params.slug;
    const articleData = data.find((article) => slug === article.id);

    if(!articleData) return null;

    return (
        <main>
        <div 
            className={styles.articlePageHeaderWrapper}
            style = {{
                backgroundImage: `url(${articleData.image.url})`,
            }}
        >
            <h1>{articleData.title}</h1>
            <p>{formatDateForArticle(articleData.publishedDate)}</p>
            <p>{articleData.blurb}</p>
        </div>
        <div className={styles.articleTextWrapper}>
            {articleData?.articleText?.map((text, i) => (
                <ArticleTextDisplay key={i} data={text.data} type = {text.type} />
            ))}
        </div>
        </main>
    )
}
