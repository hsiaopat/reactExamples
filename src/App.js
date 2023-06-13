import React from 'react';
import './style.css';
import { Comment } from './Comment';
import { CommentContainer } from './CommentContainer';

export function App(props) {
  return (
    <div>
      <h1>Hello {props.post.title} </h1>
      <h2>By {props.post.author} </h2>
      <CommentContainer comments={props.post.comments} />
    </div>
  );
}
