import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { H2, P } from '../../components/Text'
import { getPost } from '../../fetch/post'
import usePosts from '../../hooks/usePosts'

export default function Post({ id }) {
  let [post = {}, setPost] = usePosts(id)

  useEffect(() => {
    getPost(id)
      .then((post) => setPost(post))
      .catch(console.error)
  }, [])

  return (
    <div>
      <H2>post {id}</H2>
      <P>{post.body}</P>
    </div>
  )
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
}
