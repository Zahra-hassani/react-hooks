import { createContext } from "react"
import Counter from "./Counter"
import Nav from "./Nav"
import Photos from "./Photos"
import ReduceHook from "./ReduceHook"
import Slider from "./Slider"
import UserName from "./components/UserName"
import Electronics from "./Electronics"
export const nameContext = createContext();


function App() {
 

  return (
    <>
      <Nav />
      <Slider />
      <Electronics />
      <Photos />
      <ReduceHook />
      <Counter />
      <nameContext.Provider value={{name:"Ali",lastName:"Ahmadi"}}>
        <UserName />
      </nameContext.Provider>
    </>
  )
}

export default App
