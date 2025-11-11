import { useState } from "react";
// import axios from "axios";
import SearchForm from "./SearchForm";
import type { Article } from "../types/article";
import ArticleList from "./ArticleList";

import { fetchArticles } from "../services/articleService";

// interface Article {
//   objectID: string;
//   title: string;
//   url: string;
// }

// interface ArticlesHttpResponse {
//   hits: Article[];
// }

export default function AppSearchForm() {
  const [articles, setArticles] = useState<Article[]>([]);

  // 1. Додаємо стан індикатора завантаження
  const [isLoading, setIsLoading] = useState(false);

  //  Оголошуємо стан
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    //  Додаємо блок try...catch
    try {
      // 2. змінюємо індикатор на true перед запитом
      setIsLoading(true);
      // Скидаємо стан помилки в false перед кожним запитом
      setIsError(false);

      // // Тут будемо виконувати HTTP-запит
      // const response = await axios.get<ArticlesHttpResponse>(
      //   `https://hn.algolia.com/api/v1/search?query=${topic}`
      // );

      // // 3. Змінюємо індикатор на false після запиту
      // setIsLoading(false);

      // setArticles(response.data.hits);
      // // console.log(response.data); // об'єкт з властивістю hits

      // 2. Використовуємо HTTP-функцію
      const data = await fetchArticles(topic);
      setArticles(data);
    } catch {
      //  Встановлюємо стан isError в true
      setIsError(true);
    } finally {
      //  Встановлюємо стан isLoading в false
      // після будь якого результату запиту
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Search</h1>

      <SearchForm onSubmit={handleSearch} />
      {/* {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )} */}
      {/* 4. Відображаєм повідомлення про завантаження даних в JSX */}
      {isLoading && <p>Loading data, please wait...</p>}

      {/*  Використовуємо стан isError щоб показати помилку */}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}

      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
