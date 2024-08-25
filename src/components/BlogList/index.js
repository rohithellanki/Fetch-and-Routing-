// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogItemList: [], isLoading: true}

  componentDidMount = () => {
    this.fetchBlogItems()
  }

  fetchBlogItems = async () => {
    const response = await fetch(`https://apis.ccbp.in/blogs`)
    const data = await response.json()

    const formattedData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      topic: eachData.topic,
    }))
    this.setState({blogItemList: formattedData, isLoading: false})
  }

  render() {
    const {blogItemList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} testid="loader" />
        ) : (
          blogItemList.map(item => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
