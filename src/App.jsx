// import Textbox from "./Textbox"
// import "./style.css"

// // ここからTodoApp
// // 
// const [todos, setTodos] = useState(
//  [
//    { todo: "洗濯", checked: false },
//    { todo: "食器洗い", checked: false },
//    { todo: "掃除機やる", checked: false },
//  ]
// )

// const [inputText, setInputText] = useState("")

// const addTodo = (todo) => {
//  setTodos(
//    [
//      ...todos,
//      { todo: todo, checked: false }
//    ]
//  )
//  setInputText("")
// }

// console.log(inputText)

// return (
//  // JSX
//  <div>
//    <input
//      type="text"
//      value={inputText}
//      onChange={(e) => setInputText(e.target.value)}
//    />

//    <button onClick={() => addTodo(inputText)}>保存</button>

//    <ul style={{ listStyle: 'none' }}>
//      {todos.map((task) => {
//        return (
//          <li>
//            <input
//              type="checkbox"
//              checked={task.checked}
//            />
//            {task.todo}
//          </li>
//        )
//      })}
//    </ul>
// </dev>

// // {/* function App() {
// //   const name = "yurina"
// //   return (
// //     //JSX
// //     <div className="App">
// //       <h1>初めてのReactだ！</h1>
// //   <p>私の名前は{name}です。</p>
// //   <textbox
// //     color = "red"
// //     text = "渡されたよ！"
// //     />
// //   <textbox/>
// //   <textbox/>
// //   <textbox/>
// //   <textbox/>
// //   <textbox/>
// //   <textbox/>
// //     </div>
// //   );
// // } */}

// export default App;

// import { useState } from 'react'
// import Textbox from "./Textbox"
// // import Button from "./Button"
// import "./style.css"

// const App = () => {
// //   const name = "nob"
// //   const popAlert = (text) => {
// //     alert(text)
// //   }
// //   // React Hooks
// //   const [count, setCount] = useState(0)
// //   // let count = 0
// //   // const setCount = () =>{
// //   const [color, setColor] = useState("aaa")
// //   //   count = count + 1
//   // }

//   /**
//    * ここからTodoApp
//    */
//   const [todos, setTodos] = useState(
//     [
//       { todo: "洗濯", checked: false },
//       { todo: "食器洗い", checked: false },
//       { todo: "掃除機やる", checked: false },
//     ]
//   )

//   const [inputText, setInputText] = useState("")

//   const addTodo = (todo) => {
//     setTodos(
//       [
//         ...todos,
//         { todo: todo, checked: false }
//       ]
//     )
//     setInputText("")
//   }

//   console.log(inputText)

//   return (
//     <div>
//     // JSX
//       <input
//         type="text"
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//       />

//       <button onClick={() => addTodo(inputText)}>保存</button>

//       <ul style={{ listStyle: 'none' }}>
//         {todos.map((task) => {
//           return (
//             <li>
//               <input
//                 type="checkbox"
//                 checked={task.checked}
//               />
//               {task.todo}
//             </li>
//           )
//         })}
//       </ul>



//       {/* <h1 className="title">初めてのReactだ！</h1>
//       <p>講師の{name}です.よろしくお願いします.</p>
//       <button
//         onClick={() => setCount(count + 1)}
//       >
//         いいね！({count})
//       </button>
//       <Textbox
//         text="TEXT BOX"
//         color="black"
//         bgColor={color}
//       />
//       <div style={{ textAlign: 'center' }}>
//         <Button
//           whatColor="red"
//           setColor={setColor}
//         />
//         <Button
//           whatColor="orange"
//           setColor={setColor}
//         />
//         <Button
//           whatColor="green"
//           setColor={setColor}
//         />
//       </div> */}
//     </div>
//   );
// // }

// export default App;

import { useState } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import FirstLesson from './pages/FirstLesson'
import SecondLesson from './SecondLesson'
import TodoList from "./TodoList"
import Chat from "./Chat"
import ClassComponent from "./pages/Class"
import "./style.css"

const App = () => {
  // ここにJavaScript
  return (
    // JSX
    <BrowserRouter>
      <h1>TOP PAGE</h1>
      <Link className="box" to="/">FirstLesson</Link>
      <Link className="box" to="/todo">TodoApp</Link>
      <Link className="box" to="/chat">ChatApp</Link>
      <Link className="box" to="/class">ClassComponent</Link>
      <Link className="box" to="/second">SecondLesson</Link>
      <Switch>
        <Route exact path='/' component={FirstLesson} />
        <Route exact path='/todo' component={TodoList} />
        <Route exact path='/chat' component={Chat} />
        <Route exact path='/class' component={ClassComponent} />
        <Route exact path='/second' component={SecondLesson} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

