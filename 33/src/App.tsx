import React from 'react';
import './App.css';
import { useState , useEffect , useContext} from 'react';
import ThemeContext from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

import TodosList from "./TodosList";
// interface AppProps {
//   title : string,
//   description : string
// }

// const App : FC<AppProps> = ({title}) => {
//   return (
//     <div className="App">
//       <h1>{title}</h1>
//     </div>
//   );
// }

// const App = ({title , description} : AppProps) => {
//   return (
//     <div className="App">
//       <h1>{title}</h1>
//       <h1>{description}</h1>
//     </div>
//   );
// }
const App = () => {
  const [counter, setCounter] = useState<number | null>(null);
  const [theme, setTheme] = useState<boolean>(false);
  useEffect(()=>{
    setCounter(0);
  },[])
interface TodoType{
  title:string,
  done:boolean
}
  const [todos, setTodos] = useState<TodoType[]>([])
  return (
    // <div className="App">
    //   {
    //     counter !== null? (
    //     <button onClick={
    //       ()=>{
    //         setCounter(counter+1);
    //       }
    //     }>
    //     {counter}
    //   </button>
    //   ) : null
    //   }
    // </div>
    <ThemeContext.Provider value={{theme ,setTheme}}>
      <div className={ theme? "App dark" : "App"}>
       <div className="todos">
         {
           todos.map((todo, index) => (
              <TodosList title= {todo.title}  done = {todo.done}/>
           ))
         }
       </div>
      {
        counter !== null? (
        <button onClick={
          ()=>{
            setCounter(counter+1);
          }
        }>
        {counter}
      </button>
      ) : null
      }
    </div>
      <ThemeToggle />
    </ThemeContext.Provider>
  );
}

export default App;
