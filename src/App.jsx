import { useState } from "react"
import Button from "./components/Button"
import Modal from "./components/Modal"
import Dropdown from "./components/Dropdown"

function App() {
  const [modalVisibility, setModalVisibility] = useState(false)

  return (
   <div className="mx-auto container flex justify-center flex-col">
    
    {/* <Button onClick={()=>setModalVisibility(!modalVisibility)} small>Click</Button> */}

      {/* <Modal openstate={modalVisibility}>
        <div>hello</div>
        <Button onClick={() => setModalVisibility(!modalVisibility)} rounded>Close</Button>
      </Modal> */}
<div className="flex">
<Dropdown trigger={<div>Hello</div>}>
        <ul>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
        </ul>
      </Dropdown>

      <Dropdown trigger={<div>Bye</div>}>
        <ul>
          <li>Bye</li>
          <li>Bye</li>
          <li>Bye</li>
          <li>Bye</li>
        </ul>
      </Dropdown>
</div>
    
   </div>
  )
}

export default App
