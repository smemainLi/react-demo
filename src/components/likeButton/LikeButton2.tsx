import React, { Component } from 'react';

interface LikeButton2Props {
  likedText: string;
  unLikedText: string;
}

interface LikeButton2State {
  isLiked: Boolean;
  testLiked: string;
  testUnLiked: string;
}

class LikeButton2 extends Component<LikeButton2Props, LikeButton2State> {
  static defaultProps = {
    likedText: "取消",
    unLikedText: "点赞"
  }

  constructor(props: any) {
    super(props);
    this.state = {
      isLiked: false,
      testLiked: this.props.likedText,
      testUnLiked: this.props.unLikedText
    }
  }

  handleClickLikeButton() {
    /**
     * props一旦传入进来就不能改变
     */
    // this.props.likedText = "quxiao"; // Cannot assign to 'likedText' because it is a read-only property.
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickLikeButton.bind(this)}>
          {this.state.isLiked
            ? this.props.likedText
            : this.props.unLikedText
          }👍
        </button>
        <span>
          {this.state.testLiked}
        </span>
        <span>
          {this.state.testUnLiked}
        </span>
      </div>
    )
  }
}

export default LikeButton2;