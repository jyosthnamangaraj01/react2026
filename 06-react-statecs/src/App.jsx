import React,{useState}from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  // let count = 0;

function increase(){
  // count + 1;
  // count++;
  // setCount(count + 1);
  setCount((prev)=> prev+1);
  console.log(count);
}
function decrease(){
  setCount((prev)=> prev-1);
  console.log(count);
}

function reset(){
  setCount((prev)=> 0 );
  console.log(count);

}
  return (
    <div>
      <h1>React State</h1>
      <h2>Count Value : {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App