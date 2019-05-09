import React, { Component } from 'react';

class LikeButton3 extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      likedText: "已赞",
      unLikedText: "赞"
    }
  }
  handleClickOnChange() {
    this.setState({
      likedText: "取消",
      unLikedText: "点赞"
    })
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default LikeButton3;