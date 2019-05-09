import React, { Component } from 'react';

interface WordingsInter {
  likedText: String;
  unLikedText: String;
}

interface LikeButton1Props {
  // likedText: String;
  // unLikedText: String;
  // check?: Boolean;
  // wordings: any;
  wordings: WordingsInter;
  onClick: any;
}

interface LikeButton1State {
  isLiked: Boolean;
}

class LikeButton1 extends Component<LikeButton1Props, LikeButton1State> {
  constructor(props: any) {
    super(props);
    this.state = { isLiked: false };
  }

  handleClickOnLikeButton() {
    this.setState({
      isLiked: !this.state.isLiked
    })
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    // const likedText = this.props.likeText || "取消"
    // const unLikedText = this.props.unLikedText || "点赞"
    const wordings = this.props.wordings || {
      likedText: "取消",
      unLikedText: "点赞"
    }

    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? wordings.likedText : wordings.unLikedText}👍
      </button>
    )
  }
}

export default LikeButton1;