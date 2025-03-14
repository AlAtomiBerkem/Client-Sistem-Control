import React from 'react'
import {Main, Project, Registration, Authorization, TableCard, Workers} from './pages'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/AppStyle.css'

function App() {

      return (
          <BrowserRouter>
              <Routes>
                      <Route path="/" element={<Main />}/>
                      <Route path="/project" element={<Project />}/>
                      <Route path='/tablecard' element={<TableCard />}/>
                      <Route path="/tablecard/:id" element={<TableCard />} />
                      <Route path="/authorization" element={<Authorization />}/>
                      <Route path="/registration" element={<Registration />}/>
                      <Route path="/workers" element={<Workers />} />
              </Routes>
          </BrowserRouter>
      );
    }

export default App;
