import axios from "axios";
import { useState } from "react";

import OrderForm from "./OrderForm/OrderForm";
import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";
import type { Article } from "./types/article";

// interface Article {
//   story_id: number;
//   title: string;
//   url: string;
// }

interface ArticlesResponse {
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  hits: Article[];
}

export default function AppL5() {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  // event.preventDefault();
  // console.log("Hello!");
  // const form = event.currentTarget;
  // const formData = new FormData(form);
  // console.log(formData.get("username"));
  // form.reset();
  // };
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setArticles([]);

      const { data } = await axios.get<ArticlesResponse>(
        `https://hn.algolia.com/api/v1/search?query=${topic}`
      );
      console.log("data:", data);
      console.log("data:", data.hits);
      setArticles(data.hits);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <h1>Form</h1>

      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Submit</button>
      </form> */}
      <OrderForm />
      <h2>SearchForm</h2>
      <SearchForm onSearch={handleSearch} />
      {isLoading && <strong>Loading ...</strong>}
      {isError && <p>Oops, Something went wrong. Please try again!</p>}
      {/* <ArticleList items={articles} /> */}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
