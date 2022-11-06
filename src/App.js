
import './App.css'
import Index from "./pages/index.js"

import Contact from "./pages/Contact.js"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// function Apps (){
//      return <div>
//                 <Index/>
//      </div>
// }
// export default Apps;

function App() {
     return <>
          <div>


               <BrowserRouter>
                    <Routes>
                         <Route element={<Index />} path="/" />
                         <Route element={<Contact />} path="Contact"/>

                    </Routes>
               </BrowserRouter>

          </div>
     </>;
};
export default App;