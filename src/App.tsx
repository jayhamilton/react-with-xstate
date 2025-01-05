
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/todo/Header';
import Card from './components/card/Card';

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
     <Card version="1.0.0">
      </Card>
    </>
  )
}

export default App
