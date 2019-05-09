import React, { Component } from 'react';

interface LikeButtonState {
  isLiked: Boolean;
  name: String;
  count: any;
}

interface LikeButtonProps {

}

class LikeButton extends Component<LikeButtonProps, LikeButtonState> {
  constructor(props: any = {}) {
    super(props);
    this.state = {
      isLiked: false,
      name: "Tomy",
      count: 0
    }
  }

  handleClickOnLikeButton() {
    /**
     * setState方法由父类Component所提供。
     * 当我们调用这个函数的时候，React.js会更新组件的状态state，
     * 并且重新调用render方法，然后再把render方法所渲染的最新的内容显示到页面上。
     */

    /**
     * React.js并不会马上修改state
     */
    // console.log(this.state.isLiked);
    this.setState({
      isLiked: !this.state.isLiked
    })
    // // console.log(this.state.isLiked);
    // // this.setState({ count: 2 });
    // // console.log(this.state.count);
    // this.setState({ count: this.state.count + 1 });
    // // console.log(this.state.count);
    // this.setState({ count: this.state.count + 9 });
    // console.log(this.state.count);

    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    })
    console.log(this.state.count);
    this.setState((prevState) => {
      return { count: prevState.count + 2 };
    })
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickOnLikeButton.bind(this)}>
          {this.state.isLiked ? "取消" : "点赞"}👍{this.state.name}
        </button>
        <div>{this.state.count}</div>
      </div>
    )
  }
}

export default LikeButton;