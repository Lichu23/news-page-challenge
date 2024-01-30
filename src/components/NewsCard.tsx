import { useEffect, useState } from "react";
import { Article } from "../types";

const NewsCard = () => {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    fetch(
      "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=96588dada3d8bcea3944103185e9dfa6"
    )
      .then((res) => res.json())
      .then((res) => {
        setNews(res.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  bg-[#14184c] p-5">
      {news?.map((newsItem) => (
        <div
          className="flex flex-col p-5 text-balance bg-[#6168c5] text-slate-50 rounded-[30px] shadow-lg shadow-[#7479bb] gap-3
          transform transition duration-400 sm:hover:scale-105 cursor-pointer relative news-card focus-within:shadow focus-within:shadow-white"
          key={newsItem.url}
        >
          <h3>
            <a
              href={newsItem.url}
              target="_blank"
              className="font-bold text-xl line-clamp-2 focus:outline-none uppercase text-center news-link"
              title={newsItem.title}
            >
              {newsItem.title}
            </a>
          </h3>
          <div className="flex justify-center">
            <img
              src={newsItem.image}
              alt="Image"
              className="w-full h-52 object-cover rounded-2xl"
            />
          </div>
          <div className="flex justify-between font-semibold">
            <div>{newsItem.author}</div>
            <div>
              {new Date(newsItem.publishedAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              })}
            </div>
          </div>
          <p
            title={newsItem.description}
            className="text-lg font- line-clamp-3"
          >
            {newsItem.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
