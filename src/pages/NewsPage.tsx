import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchStory } from '../services/api';
import CommentList from '../components/CommentList';
import styles from '../styles/NewsPage.module.css';

const NewsPage: React.FC = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const [story, setStory] = useState<any>(null);
  const navigate = useNavigate();


  useEffect(() => {
    const getStory = async () => {
      if (id) {
        const story = await fetchStory(Number(id));
        setStory(story);
      }
    };
    getStory();
  }, [id]);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
      <div className={styles.newsPage}>
        <button className={styles.button_blue} onClick={() => navigate('/')}>Back to Home</button>
        <h1 className={styles.title}>{story.title}</h1>
        <p className={styles.text}>By {story.by} | Score: {story.score}</p>
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          Read full story
        </a>
        {story.kids && <CommentList kids={story.kids} />}
      </div>
  );
};

export default NewsPage;
