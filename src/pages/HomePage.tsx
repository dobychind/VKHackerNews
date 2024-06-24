import React, { useEffect, useState, useRef } from 'react';
import NewsList from '../components/NewsList';
import { fetchStories } from '../services/api';
import styles from '../styles/Homepage.module.css'

const HomePage: React.FC = () => {
  const [stories, setStories] = useState<number[]>([]);
  const [storyType, setStoryType] = useState('beststories');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const loadStories = async () => {
    const stories = await fetchStories(storyType);
    setStories(stories);
  };

  const handleManualUpdate = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    loadStories();
    startTimer();
  };

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      loadStories();
      startTimer();
    }, 30000);
  };

  useEffect(() => {
    loadStories();
    startTimer();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [storyType]);

  return (
    <div className={styles.header__container}>
      <header className={styles.header}>VK Hacker News</header>
      <div className={styles.view}>
        <button onClick={() => setStoryType('beststories')}>Best</button>
        <button onClick={() => setStoryType('newstories')}>New</button>
        <button onClick={() => setStoryType('topstories')}>Top</button>
        <button onClick={handleManualUpdate}>Refresh</button>
      </div>
      <NewsList storyIds={stories} />
    </div>
  );
};

export default HomePage;
