import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button className="bg-red-600"></Button>
    </>
  );
}

export default App;