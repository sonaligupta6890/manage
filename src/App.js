import {Route, Routes} from "react";
import './App.css';
import Button from './pages/Button';
import Form from './pages/Form';
import Layout from './components/Layout'
function App(){
  return(
    <Layout>
      <Routes>
        <Route path="/add-form" element={<Form/>}></Route>
        <Route path="/edit-button/:id" element={<Button/>}></Route>
      </Routes>
    </Layout>
  );
}


export default App;