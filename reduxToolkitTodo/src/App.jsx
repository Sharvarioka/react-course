import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

// When to use redux:
//  Same piece of application state needs to be mapped to multiple container components and they are not in the hierarchy(siblings)
//  Global components can be accessed from anywhere
//  Too many props being passed through hierarachies of components
//  State management using setState is bloating the component
//  There is a need to cache the page state


// Steps for redux:
// 1. create a store by using the method configureStore(see app/store.js) and add reducer created in step 2
// 2. create a slice(reducer) (see features/todo/todoSlice.js)
  // 2.1: create initialState
  // 2.2: create a function using method createSlice with paramenters name, 
  //      initialState, and reducers(reducers contain property and function with complete definition. Every
  //      function gets (state, action). 
  //      state->current state of the values, 
  //      action(action.payload)-> values of other required variable e.g. id if we need to delete spme element).
  // 
  // 2.3: export the actions
  // 2.4: export reducers
// 3. UseuseDispatch and useSelector to wire up react with redux
//  3.1: useDispatch(see components/AddTodo.jsx and components/Todos.jsx) -> useDispach use reducers and performs changes in the store 
//  3.2: useSelector-> to get all values from state of the store (see components/Todos.jsx) 
// 4. Add Provider and store in main.jsx(or can be done in App.jsx as well) to wrap the whole application

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
