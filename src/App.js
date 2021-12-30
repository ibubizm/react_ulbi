import { useState, useEffect } from 'react'
import { PostForm } from './components/postForm'
import { PostList } from './components/postList'
import { MySelect } from './components/UI/select/mySelect'

import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'js',
      body: 'npm ',
    },
    {
      id: 2,
      title: 'python',
      body: 'pip ',
    },
    {
      id: 3,
      title: 'node',
      body: 'yarn ',
    },
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((i) => i.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    console.log(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          defaultValue={'sort by'}
          value={selectedSort}
          onChange={sortPosts}
          options={[
            { value: 'title', name: 'by title' },
            { value: 'body', name: 'by body' },
          ]}
        />
      </div>
      <PostList removePost={removePost} list={posts} />
    </div>
  )
}

export default App
