import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/Footer";
import LikeButton from "./components/likeButton/LikeButton";
import LikeButton1 from "./components/likeButton/LikeButton1";
import LikeButton2 from "./components/likeButton/LikeButton2";
import User from "./components/user/User";

const users = [
  { id: "342342342342", username: "Jerry", age: 21, gender: "male" },
  { id: "234354654657", username: "Tomy", age: 22, gender: "male" },
  { id: "658678656786", username: "Lily", age: 19, gender: "female" },
  { id: "789786089089", username: "Lucy", age: 20, gender: "female" }
]

const App: React.FC = () => {
  const [likedText, setLikedText] = useState("已赞");
  const [unLikedText, setUnLikedText] = useState("赞");


  const handleClickOnChange = () => {
    setLikedText("取消ffff");
    setUnLikedText("点赞zzzz");
  }

  function handleClickOnChange2() {
    setLikedText("修改--取消");
    setUnLikedText("修改--点赞");
  }

  const usersElements = [];
  for (const user of users) {
    usersElements.push(
      <div>
        <div>姓名：{user.username}</div>
        <div>年齡：{user.age}</div>
        <div>性別：{user.gender}</div>
        <hr />
      </div>
    )
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!
        </a>
      </header> */}
      {/* <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <LikeButton></LikeButton> */}
      {/* <LikeButton1 likedText="已赞" unLikedText="赞"></LikeButton1> */}
      {/* <LikeButton1
        wordings={{ likedText: "已赞", unLikedText: "赞" }}
        onClick={() => console.log("Click on like button!")}>
      </LikeButton1>
      <LikeButton2
        likedText={likedText}
        unLikedText={unLikedText} />
      <div>
        <button onClick={handleClickOnChange}>
          修改wordings
        </button>
      </div>
      <div>
        <button onClick={handleClickOnChange2}>
          再一次修改
        </button>
      </div> */}
      {/* <div>
        {[
          <div>React.js</div>,
          <div>is</div>,
          <div>good</div>
        ]}
      </div> */}
      {/* {usersElements} */}
      {/* {users.map((user, index) => {
        return (
          <div>
            <div>{index}</div>
            <div>姓名：{user.username}</div>
            <div>年龄：{user.age}</div>
            <div>性别：{user.gender}</div>
          </div>
        )
      })} */}
      {users.map((user, index) => {
        return (<User key={index} user={user}></User>)
      })}
      <hr />
      {users.map((user, index) => <User key={index} user={user} />)}
      <hr />
      {users.map((user) => {
        return (
          <User key={user.id} user={user} />
        )
      })}
    </div>
  );
}

export default App;
