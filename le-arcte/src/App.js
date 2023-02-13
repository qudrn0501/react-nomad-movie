import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  useEffect(() => {
    // useEffect는 코드가 한번만 실행될 수 있도록 보호함
    console.log("i run only once");
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes.", keyword);
  }, [keyword])
  useEffect(() => {
    console.log("i run when 'counter' changes.", keyword);
  }, [counter])
  useEffect(() => {
    console.log("i run when keyword & counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App