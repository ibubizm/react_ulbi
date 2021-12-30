import { PostItem } from './postItem'

export const PostList = ({ list, removePost }) => {
  return (
    <div>
      <h1>Posts</h1>
      <div>
        {list.length > 0 ? (
          list.map((item, index) => (
            <PostItem
              removePost={removePost}
              key={item.id}
              post={item}
              index={index + 1}
            />
          ))
        ) : (
          <h1 style={{ textAlign: 'center' }}>no posts</h1>
        )}
      </div>
    </div>
  )
}
