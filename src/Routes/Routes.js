import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NewPost from "../Pages/NewPost/NewPost";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/new"  element={<NewPost/>}/> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas