import React, { useState } from 'react'
import Textbox from "./components/Textbox"
import Button from "./components/Button"

const FirstLesson = () => {
  const name = "yurina"

  // React Hooks
  const [count, setCount] = useState(0)
  // let count = 0
  // const setCount = () =>{
  //   count = count + 1
  // }
  // と一緒
  const [color, setColor] = useState("aaa")

  return (
    <div className="box">
      <h1 className="title">初めてのReactだ！</h1>
      <p>{name}です.よろしくお願いします.</p>
      <button
        onClick={() => setCount(count + 1)}
      >
        いいね！({count})
      </button>
      <Textbox
        text="TEXT BOX"
        color="black"
        bgColor={color}
      />
      <div style={{ textAlign: 'center' }}>
        <Button
          whatColor="red"
          setColor={setColor}
        />
        <Button
          whatColor="orange"
          setColor={setColor}
        />
        <Button
          whatColor="green"
          setColor={setColor}
        />
      </div>
    </div>
  )
}

export default FirstLesson