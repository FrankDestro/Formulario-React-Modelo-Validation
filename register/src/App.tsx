import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Register from "./routes/Register"

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
