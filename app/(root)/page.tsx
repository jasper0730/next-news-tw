"use client"
import { useEffect } from 'react';

export default function Home() {
  // useEffect(() => {
  //   if(typeof window !== 'undefined') {
  //     const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  //     document.body.classList.toggle('dark', darkMode)
  //   }
  // }, []);
  return  (
    <div className="bg-white dark:bg-black">111</div>
  )
}