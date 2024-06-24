import React, { useEffect, useState } from 'react';
import CommentItem from './CommentItem';
import { fetchStory } from '../services/api';
import styles from '../styles/CommentList.module.css';

interface CommentListProps {
  kids: number[];
}

const CommentList: React.FC<CommentListProps> = ({ kids }) => {
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    const getComments = async () => {
      const commentsData = await Promise.all(kids.map((id) => fetchStory(id)));
      setComments(commentsData);
    };
    getComments();
  }, [kids]);

  return (
    <div className={styles.commentList}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
