import { createContext } from "react"
import Counter from "./Counter"
import Nav from "./Nav"
import ReduceHook from "./ReduceHook"
import Slider from "./Slider"
import UserName from "./components/UserName"
import Electronics from "./Electronics"
import Dark from "./Dark"
// import User from "./User"
export const nameContext = createContext();


function App() {
 

  return (
    <>
      <Nav />
      <Slider />
      <Dark />
      <Electronics />
      {/* <User /> */}
      <ReduceHook />
      <Counter />
      <nameContext.Provider value={{name:"Ali",lastName:"Ahmadi"}}>
        <UserName />
      </nameContext.Provider>
    </>
  )
}

export default App
