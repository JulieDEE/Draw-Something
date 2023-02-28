import { Stage, Layer, Line, Rect, Group } from 'react-konva';
import React, { useRef, useState } from 'react';

const Board = ({lines, setLines, isDrawing, setIsDrawing, colorPicked, setColorPicked}) => {

  const stageEl = useRef(null);
  const layerEl = useRef(null);

  const handleMouseDown = e => {
    // update the state with a new line object
    setLines([
      ...lines,
      {
        points: [e.evt.offsetX, e.evt.offsetY],
        color: colorPicked,
        width: 2
      }
      
    ]);
    setIsDrawing(true);
  };

  const handleMouseMove = e => {
      if (!isDrawing) {
      return;
    }
    // get the latest line object from the state
    const currentLine = lines[lines.length - 1];

    // update the points of the latest line object
    setLines([
      ...lines.slice(0, -1),
      {
        ...currentLine,
        points: [...currentLine.points, e.evt.offsetX, e.evt.offsetY]
      }
    ]);
  };

  const handleMouseUp = e => {
    setIsDrawing(false);
  };


    return (
        <div className="bg-gray-200 flex items-center justify-center p-2" style={{width : "100%", height:"92vh"}}>
     <Stage
      width={1000}
      height={600}
      ref={stageEl}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
          <Layer ref={layerEl} style={{ background: "red" }}>
            <Group>
              <Rect
              x={0}
            y={-20}
            width={1000}
            height={600}
            fill="white"
            shadowBlur={20}
                        />
        {lines.map((line, i) => {
          return (
            <Line
              key={i}
              points={line.points}
              stroke={line.color}
              strokeWidth={10}
              lineCap="round"
              lineJoin="round"
            />
      
          )
        })}
            </Group>
    
      </Layer>
        </Stage>
        </div>
    )
}

export default Board; 