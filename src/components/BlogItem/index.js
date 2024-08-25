// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, author, avatarUrl, topic} = blogData
  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <li className="each-blogitem-li">
        <img src={imageUrl} className="main-image" alt={`item${id}`} />
        <div className="blog-info">
          <p className="para user-name">{topic}</p>
          <h1 className="heading">{title}</h1>
          <div className="user-information-container">
            <img src={avatarUrl} className="user-image" />
            <p className="user-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
