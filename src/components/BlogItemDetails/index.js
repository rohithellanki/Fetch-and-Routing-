// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: [], isLoading: true}

  componentDidMount = () => {
    this.fetchBlogDetails()
  }

  fetchBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)

    const blogDetailsData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }

    this.setState({blogDetails: blogDetailsData, isLoading: false})
  }

  render() {
    const {blogDetails} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogDetails

    return (
      <div className="blog-item-details">
        <h1 className="main-heading">{title}</h1>
        <div className="profile-pic-container">
          <img src={avatarUrl} className="user-image1"  />
          <p className="user-name">{author}</p>
        </div>
        <img src={imageUrl} className="full-image" alt={title} />
        <p className="blog-details">{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
