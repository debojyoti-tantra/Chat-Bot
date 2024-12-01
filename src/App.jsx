import { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState("")
  const [ans,setAns] = useState("Ask Me Anything..."); 
  
   async function generateAns() {
      setAns("loding...")
      const response = await axios({
         url:`${import.meta.env.VITE_API_KEY}`,
         method:"post",
         data:{
            "contents":[
               {"parts":[{"text": question}]}
            ]
         }
      })
      
      setAns(response["data"]["candidates"][0]["content"]["parts"][0]["text"].replaceAll("*", ""))
   }
   
  return (
   <>
      <Navbar />
      
      <div className="flex items-center flex-col">
         <div className="flex justify-center items-center">
            <textarea value={question} onChange={(e) => setQuestion(e.target.value)} className="m-2 p-1 w-[90vw] h-36 border-2 border-lime-900 rounded" />
         </div>
         
         <button onClick={() => { generateAns(); setQuestion(""); }} className="mt-2 m-1 py-2 px-3 border-2 rounded-xl border-none active:bg-lime-800 bg-lime-950 text-white">Generate Ans</button>
      </div>
      
      <div className="prose mx-auto my-2 p-2 bg-gray-100 rounded shadow-md w-[90vw]">
         <pre className="overflow-auto bg-gray-800 text-white text-sm sm:text-xl p-2 rounded whitespace-pre-wrap break-words">
            <code>{ans}</code>
         </pre>
      </div>
      
      <Footer />
   </>
  )
}

export default App
