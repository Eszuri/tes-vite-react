import App2 from "./App2"
import App3 from "./App3"
import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App2 />} />
          <Route path="/k" element={<App3 dd="direcK" />} />
          <Route path="*" element={<App3 />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}
