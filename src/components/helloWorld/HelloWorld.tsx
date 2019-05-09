import React, { Component } from 'react';

// export class HelloWorld extends Component {
//   constructor(props: any) {
//     super(props);
//   }
//   sayHi() {
//     alert("Hello World");
//   }

//   render() {
//     return (
//       <div onClick={this.sayHi.bind(this)}>Hello World</div>
//     )
//   }
// }

/**
 * 函数式组件————一种定义不能使用state的组件
 * @param {any} props
 */
export const HelloWorld = (props: any) => {
  const sayHi = (event: any) => {
    alert("Hello World");
  }

  return (
    <div onClick={sayHi}>Hello World</div>
  )
}
