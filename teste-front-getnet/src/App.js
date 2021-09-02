import api from "./api";

 function App() {

  async function getToken(){

    const response = await api.post('/auth')
    console.log(response.data) 
  }

  return (
  <>
    <h1>home page</h1> 

    <button onClick={getToken}>Pagar</button>
   </>
  )
}

export default App

