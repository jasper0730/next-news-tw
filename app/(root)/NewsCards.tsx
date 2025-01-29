"use client";

import { useEffect, useMemo, useState } from "react";
import { useNewsStore } from "@/store/newsStore";
import { useShallow } from "zustand/shallow";
import { NewsDataType } from "@/types/news";
import NewsCard from "@/components/newsCard/NewsCard";
import axios from "axios";

interface NewsCardsProps {
  data: {
    data: NewsDataType[];
    success: boolean;
  };
}

const NewsCards = ({ data }: NewsCardsProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { query, sortType } = useNewsStore(
    useShallow((state) => ({
      query: state.query,
      sortType: state.sortType,
    }))
  );

  const queryValue = query.trim().toLowerCase();
  const newsData = data.data;
  const sortedData = useMemo(() => {
    const safeNewsData = newsData || []
    const filterData = queryValue
      ? safeNewsData.filter(
        (data) =>
          data.title?.toLowerCase().includes(queryValue) ||
          data.description?.toLowerCase().includes(queryValue)

      )
      : safeNewsData;
    return [...filterData].sort((a, b) => {
      const aDate = new Date(a.pubDate).getTime();
      const bDate = new Date(b.pubDate).getTime();
      switch (sortType) {
        case "rating":
          return b.rate - a.rate;
        case "date":
          return bDate - aDate;
        default:
          return 0;
      }
    });
  }, [newsData, queryValue, sortType])

  const handleFavoriteClick = async (id: string) => {
    try {
      const res = await axios.post("/api/favorite", { id });
      if (res.data.success) {
        setFavorites((prevFavorites) =>
          res.data.message === "Favorite added"
            ? [...prevFavorites, id]
            : prevFavorites.filter((favId) => favId !== id)
        );
      }
    } catch (error) {
      console.error("Failed to update favorite:", error);
    }
  };

  useEffect(() => {
    const favoriteIds = sortedData
      .filter((item) => item.favorite === true)
      .map((item) => item.article_id)

    setFavorites(favoriteIds);
  }, [sortedData]);

  if (!data.success) {
    return <p>Failed to fetch</p>;
  }
  return (
    <div className="min-h-screen p-4">
      <div className="grid grid-cols-4 gap-4">
        {sortedData.map((data) => (
          <NewsCard
            key={data.article_id}
            articleId={data.article_id}
            title={data.title}
            description={data.description}
            date={data.pubDate}
            sourceIcon={data.source_icon}
            sourceName={data.source_name}
            sourceUrl={data.source_url}
            rate={data.rate}
            favorite={favorites.includes(data.article_id)}
            onFavoriteClick={handleFavoriteClick}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCards;