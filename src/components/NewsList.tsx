import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import styles from '../styles/NewsList.module.css';

interface NewsListProps {
  storyIds: number[];
}

const NewsList: React.FC<NewsListProps> = ({ storyIds }) => {
  const [visibleStories, setVisibleStories] = useState<number[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setVisibleStories(storyIds.slice(0, page * 15));
  }, [storyIds, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.newsList}>
      {visibleStories.map((id) => (
        <NewsItem key={id} id={id} />
      ))}
      <button className={styles.button_blue} onClick={loadMore}>Load More</button>
    </div>
  );
};

export default NewsList;
