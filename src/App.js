import { useState, useEffect, useMemo } from 'react'
import { PostForm } from './components/postForm'
import { PostList } from './components/postList'
import { MyInput } from './components/UI/input/myInput'
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
  const [search, setSearch] = useState('')
  const [selectedSort, setSelectedSort] = useState('')

  const sortedPosts = useMemo(() => {
    console.log(posts)
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      )
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSerchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(search)
    )
  }, [sortedPosts, search])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((i) => i.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
        />
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
      <PostList
        removePost={removePost}
        list={sortedAndSerchedPosts}
        title={'posts'}
      />
    </div>
  )
}

export default App
