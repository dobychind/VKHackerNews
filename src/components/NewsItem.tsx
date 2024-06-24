import React, { useEffect, useState } from 'react';
import { fetchStory } from '../services/api';
import styles from '../styles/NewsItem.module.css';

interface NewsItemProps {
  id: number;
}

const NewsItem: React.FC<NewsItemProps> = ({ id }) => {
  const [story, setStory] = useState<any>(null);

  useEffect(() => {
    const getStory = async () => {
      const story = await fetchStory(id);
      setStory(story);
    };
    getStory();
  }, [id]);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.newsItem}>
      <a className={styles.title} href={story.url} target="_blank" rel="noopener noreferrer">
        {story.title}
      </a>
      <p>By <span className={styles.bold}>{story.by}</span> | Score: {story.score}</p>
      <a href={`/news/${id}`}>Comments</a>
    </div>
  );
};

export default NewsItem;
