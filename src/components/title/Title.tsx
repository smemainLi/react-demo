import React, { Component } from 'react';

class Title extends Component {
  handleClickOnTitle(word: any, event: any) {
    event.persist();
    console.log(event);
    // console.log(event.target);
    console.log(event.target.innerHTML);
    console.log('Click on title');
    console.log(this);
    console.log(word);
  }

  render() {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this, "Hello")}>react title TTTitle</h1>
    )
  }
}

export default Title;

// import React from 'react';

// const Title: React.FC = () => {
//   const handleClickOnTitle = (event: any) => {
//     event.persist();
//     console.log(event);
//     // console.log(event.target);
//     console.log(event.target.innerHTML);
//     console.log('Click on title');
//   }

//   return (
//     <h1 onClick={handleClickOnTitle}>react title TTTitle</h1>
//   )
// }

// export default Title;