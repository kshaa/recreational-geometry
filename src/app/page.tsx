"use client"

import { ChangeEvent, useState } from "react";
import Congruent from "./congruent";

export default function Home() {
  const [scale, setScale] = useState(100)
  const onScaleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(e.target.value)
    if (number <= 0) return
    setScale(number)
  }

  const [width, setWidth] = useState(50)
  const onWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(e.target.value)
    if (number <= 0) return
    setWidth(number)
  }
  
  return (
    <div className="p-10 h-dvh">
      <div className="h-full relative">
        <Congruent scale={scale} width={width}/>
        <div style={{ position: 'absolute', top: 10, right: 10 }}>
          <div className="block max-w-sm p-6 pb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Zoom ({scale}%)
              </label>
              <input 
                id="typeinp" 
                type="range" 
                className="w-64"
                min="50" max="300" 
                value={scale} 
                onChange={onScaleChange}/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Rectangle width ({width} px)
              </label>
              <input 
                id="typeinp" 
                type="range" 
                className="w-64"
                min="1" max="300" 
                value={width} 
                onChange={onWidthChange}
                step="1"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
