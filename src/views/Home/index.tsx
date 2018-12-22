import React from 'react';
import { Query } from 'react-apollo';

import { Card } from '../../components/globals';
import { getPostsQuery as QUERY } from '../../graphql/queries/post';
import PostPreview from './PostPreview';
import { GetPosts } from '../../graphql/queries/__generated__/GetPosts';

class PostsQuery extends Query<GetPosts> {}

export const Home: React.FunctionComponent = () => {
  return (
    <Card>
      <PostsQuery query={QUERY}>
        {({ data, loading, error }) => {
          if (loading) return 'Loading..';
          if (error) return <p>{JSON.stringify(error, null, 2)}</p>;
          if (!data) return <div>no data</div>;
          return (
            <pre>
              {data.getPosts.posts.map((post: any) => (
                <PostPreview
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  author={post.author}
                />
              ))}
            </pre>
          );
        }}
      </PostsQuery>
    </Card>
  );
};

export default Home;