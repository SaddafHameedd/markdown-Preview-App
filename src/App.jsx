import { useState } from 'react'
import React from 'react'
import ReactMarkDown from 'react-markdown'
import './App.css'

export default function App() {
  const [markdown, setMarkdown] = useState("# Markdown Preview")
  
  return (
    <main>
     
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkDown>{markdown}</ReactMarkDown>
        </article>
      </section>
    </main>
  )
}
