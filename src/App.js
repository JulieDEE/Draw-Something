import './App.scss';
import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import Board from './components/Board';
import { useState } from 'react';


function App() {

  const [lines, setLines] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [colorPicked, setColorPicked] = useState("black");

  return (
    <div className="w-full" >
      <Navbar lines={lines} setLines={setLines} isDrawing={isDrawing} setIsDrawing={setIsDrawing} colorPicked={colorPicked} setColorPicked={setColorPicked} />
      <Board lines={lines} setLines={setLines} isDrawing={isDrawing} setIsDrawing={setIsDrawing} colorPicked={colorPicked} setColorPicked={setColorPicked}   />
    </div>
  );
}

export default App;
