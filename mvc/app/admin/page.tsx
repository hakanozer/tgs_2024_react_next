'use client'

import dynamic from "next/dynamic";
import { useCountStore } from "../store/actionStore";
import { useEffect, useState } from "react";

const PostItems = dynamic(() => import("../components/PostItem"));

function Dashboard () {
  
  const increaseCount = useCountStore((state:any) => state.increaseCount);
  const decreaseCount = useCountStore((state:any) => state.decreaseCount);
  const count = useCountStore((state:any) => state.count);
  
  const [isPost, setIsPost] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsPost(true)
    }, 3000);
  }, [])
  
  return (
      <main className="w-full h-screen bg-slate-800">
        <h1 className="text-center text-4xl">Simple Counter</h1>
        <span className="text-center mt-3 block">Result: {count}</span>
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            className="w-max h-max p-2 bg-green-400 rounded-md font-mono
           hover:bg-green-600 transition-colors duration-300"
            onClick={increaseCount}
          >
            Add(10)
          </button>
          <button
            className="w-max h-max p-2 bg-green-400 rounded-md font-mono
           hover:bg-green-600 transition-colors duration-300"
            onClick={decreaseCount}
          >
            Remove(10)
          </button>
        </div>

      {isPost && 
        <PostItems />
      }

      </main>
    )
}

export default Dashboard