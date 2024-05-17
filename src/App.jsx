import {GlobalStyle} from "./Global.jsx";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// 2 - reproveitamento de estrutura
// ja que os caminhos vão ser todos renderizados apartir de outelet
import { Outlet} from "react-router-dom";

function App() {
  return (
    <div>
      <ToastContainer autoClose={5000} hideProgressBar={false}
      transition:slide/>
    <GlobalStyle/>
      <Outlet />
    </div>
  );
}

export default App;
