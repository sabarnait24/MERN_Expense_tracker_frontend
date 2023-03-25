const { useNavigate } = require("react-router-dom");

const  AuthorizeUser=({children})=>{
const navigate=useNavigate();
   const token=localStorage.getItem("token");
   if(!token){
    return navigate("/");
   }
   return children;
}

module.exports={
    AuthorizeUser,
}