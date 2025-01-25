// import { useEffect, useState } from 'react'
// import Navbar from './component/Navbar'
// import Footer from './component/Footer'
// import './App.css'
// import { v4 as uuidv4 } from 'uuid';
// import { FaEdit } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";

// function App() {
//   const [todo, setTodo] = useState("")
//   const [todos, setTodos] = useState([])
//   const [showFinished, setshowFinished] = useState(true)

//   useEffect(() => {
//     let todoString = localStorage.getItem("todos")
//     if (todoString) {
//       let todos = JSON.parse(localStorage.getItem("todos"))
//       setTodos(todos)
//     }
//   }, [])

//   const saveTols = (params) => {
//     localStorage.setItem("todos", JSON.stringify(todos))
//   }
//   const toggleFinished =(e) => {
//     setshowFinished(!showFinished)
//   }
  

//   const handleAdd = () => {
//     setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
//     setTodo("")
//     saveTols()
//   }
  
//   const handleEdit = (e, id) => {
//     let t = todos.filter(i => i.id === id)
//     setTodo(t[0].todo)
//     let newTodos = todos.filter(item => {
//       return item.id !== id;
//     })
//     setTodos(newTodos)
//     saveTols()
//   }
//   const handleDelete = (e, id) => {
//     let newTodos = todos.filter(item => {
//       return item.id !== id;
//     })
//     setTodos(newTodos)
//     saveTols()
//   }
//   const handleCheck = (e) => {
//     let id = e.target.name;
//     let index = todos.findIndex(item => {
//       return item.id === id;
//     })
//     let newTodos = [...todos];
//     newTodos[index].isCompleted = !newTodos[index].isCompleted;
//     setTodos(newTodos)
//     saveTols()
//   }

//   const handleChange = (e) => {
//     setTodo(e.target.value)
//   }

//   return (
//     <>
//       <Navbar />
//       <div className='mx-3 lg:container lg:mx-auto bg-violet-100 rounded-xl p-5 my-5 min-h-[80vh] lg:w-1/2'>
//       <h1 className='font-bold text-2xl text-center'>iTask-Manage your todo at one place</h1>
//         <div className="addTodo my-5 flex flex-col gap-5">
//           <h2 className='text-md font-bold'>Add a Todo</h2>
//           <div className='flex'>
//           <input onChange={handleChange} value={todo} type="text" name="text" className='w-full rounded-xl p-1' />
//           <button onClick={handleAdd} disabled={todo.length <=3} className='bg-violet-700 hover:bg-violet-800 mx-2 text-sm font-bold p-2 py-1 text-white rounded-md'>Save</button>
//           </div>
//         </div>
//         <input onChange={toggleFinished} type="checkbox" checked={showFinished}/> Show Finished
//         <div className='w-full h-[1px] bg-black mt-2'></div>
//         <h2 className='font-bold text-lg my-5'>Your Todos</h2>
//         <div className="todos">
//           {todos.length === 0 && <div className='m-5'>No todos to display</div>}
//           {todos.map(item => {
//             return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between my-3">
//               <div className='flex gap-5'>
//                 <input onChange={handleCheck} type="checkbox" checked={item.isCompleted} name={item.id} />
//                 <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
//               </div>
//               <div className="buttons flex h-full">
//                 <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-violet-700 hover:bg-violet-900 text-sm font-bold p-2 py-1 text-white rounded-md mx-1'><FaEdit /></button>
//                 <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-700 hover:bg-violet-900 text-sm font-bold p-2 py-1 text-white rounded-md mx-1'><AiFillDelete /></button>
//               </div>
//             </div>
//           })}
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default App


import { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const saveTodos = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleAdd = () => {
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    setTodos(newTodos);
    saveTodos(newTodos);
    setTodo("");
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find(item => item.id === id);
    setTodo(todoToEdit.todo);
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const handleCheck = (id) => {
    const newTodos = todos.map(item => 
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className='mx-3 lg:container lg:mx-auto bg-violet-100 rounded-xl p-5 my-5 min-h-[80vh] lg:w-1/2'>
        <h1 className='font-bold text-2xl text-center'>iTask-Manage your todo at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-5">
          <h2 className='text-md font-bold'>Add a Todo</h2>
          <div className='flex'>
            <input 
              onChange={handleChange} 
              value={todo} 
              type="text" 
              name="text" 
              className='w-full rounded-xl p-1' 
            />
            <button 
              onClick={handleAdd} 
              disabled={todo.length <= 3} 
              className='bg-violet-700 hover:bg-violet-800 mx-2 text-sm font-bold p-2 py-1 text-white rounded-md'>
                Save
            </button>
          </div>
        </div>
        <input 
          onChange={toggleFinished} 
          type="checkbox" 
          checked={showFinished} 
        /> 
        Show Finished
        <div className='w-full h-[1px] bg-black mt-2'></div>
        <h2 className='font-bold text-lg my-5'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No todos to display</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && (
              <div key={item.id} className="todo flex justify-between my-3">
                <div className='flex gap-5'>
                  <input 
                    onChange={() => handleCheck(item.id)} 
                    type="checkbox" 
                    checked={item.isCompleted} 
                    name={item.id} 
                  />
                  <div className={item.isCompleted ? "line-through" : ""}>
                    {item.todo}
                  </div>
                </div>
                <div className="buttons flex h-full">
                  <button 
                    onClick={() => handleEdit(item.id)} 
                    className='bg-violet-700 hover:bg-violet-900 text-sm font-bold p-2 py-1 text-white rounded-md mx-1'>
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)} 
                    className='bg-violet-700 hover:bg-violet-900 text-sm font-bold p-2 py-1 text-white rounded-md mx-1'>
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
