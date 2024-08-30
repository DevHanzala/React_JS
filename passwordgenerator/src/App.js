import { useCallback, useEffect,useRef } from 'react';
import { useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [chatAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  //useRef hook
  const PasswordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (chatAllowed) str += "~!@#$%^&*(){}[]_+";

    for (let i = 0; i < length; i++) { 
      let char = Math.floor(Math.random() * str.length); 
      pass += str.charAt(char); 
    }
    setPassword(pass);

  }, [length, numberAllowed, chatAllowed, setPassword]);   //for optimization (usecallback)

const copyPasswordToClipboard=useCallback(()=>{
PasswordRef.current?.select()
PasswordRef.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(Password)
},[Password])

useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,chatAllowed,passwordGenerator]) //    If anything can be changed to run it again
  return (
    <>
      <div className='md:w-full md:max-w-md mx-auto shadow-md rounded-lg px-4 my-7 py-4 text-orange-500 bg-green-500 font-mono'>
        <h1 className='text-white text-center text-2xl my-3 '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} className='outline-none w-full py-1 md:px-3 px-1 bg-red-500 text-gray-400' ref={PasswordRef} placeholder='Password' readOnly />
          <button className='outline-none bg-blue-700 focus:bg-green-900 text-white px-3 py-2 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm md:gap-x-2 gap-x-1'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className='text-white'>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>setNumberAllowed((prev)=>!prev)}
            ></input>
            <label htmlFor='numberInput' className='text-white'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked={chatAllowed}
            id='charInput'
            onChange={()=>setCharAllowed((prev)=>!prev)}
            ></input>
            <label htmlFor='charInput' className='text-white'>Characters</label>
          </div>
        </div>   
      </div>
    </>
  );
}

export default App;
