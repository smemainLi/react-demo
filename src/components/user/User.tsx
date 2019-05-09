import React, { FC } from 'react';

interface UserProps {
  user: any;
}

const User: FC<UserProps> = (props) => {
  // console.log(props);
  const { user } = props;
  console.log({ user });
  console.log(user);
  return (
    <div>
      <div>姓名：{user.username}</div>
      <div>年龄：{user.age}</div>
      <div>性别：{user.gender}</div>
    </div>
  )
}

export default User;