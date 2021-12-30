import { MyButton } from './UI/button/myButton'

export const PostItem = ({ post, index, removePost }) => {
  return (
    <div>
      <div className="post">
        <div className="post_content">
          <strong>
            {index}: {post.title}
          </strong>
          <div>{post.body}</div>
        </div>
        <div className="post_btn">
          <MyButton onClick={() => removePost(post)}>delete</MyButton>
        </div>
      </div>
    </div>
  )
}
