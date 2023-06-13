import * as React from 'react';
import { Comment } from './Comment';

export function CommentContainer(props) {
  return props.comments.map((comment) => {
    return <Comment body={comment} />;
  });
}
