import React from 'react';
import styles from '../styles/CommentItem.module.css';
import CommentList from './CommentList'

interface CommentItemProps {
  comment: any;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <div className={styles.commentItem}>
      <p className={styles.author}>{comment.by}</p>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: comment.text }} />
      {comment.kids && <CommentList kids={comment.kids} />}
    </div>
  );
};

export default CommentItem;
