import { useState } from 'react'
import { MyButton } from './UI/button/myButton'
import { MyInput } from './UI/input/myInput'

export const PostForm = ({ createPost }) => {
  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      ...post,
    }
    createPost(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form>
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
        placeholder="input"
      />
      <MyInput
        placeholder="text"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>create</MyButton>
    </form>
  )
}
