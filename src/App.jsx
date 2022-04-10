import { useState } from 'react'
import Counter from './features/counter/Counter'
import PostList from './features/posts/PostList'
import AddPostForm from './features/posts/AddPostForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Counter />
      <PostList />
      <AddPostForm />
    </div>
  )
}

export default App
