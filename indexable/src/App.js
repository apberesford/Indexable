import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { SiteContext } from "./context";
import GlobalStyle from "./globalStyles";



import AddEntry from "./addEntry";
import Home from './Home';
import Sidebar from "./sidebar";
import NewIndex from "./NewIndexSetup";



const App = () => {
  return (
    <Router>
      <LayoutWrapper>
        <GlobalStyle />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/new' element={<NewIndex/>} />
          <Route path="/add" element={<AddEntry/>} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
};

const LayoutWrapper = styled.div``;

export default App;
