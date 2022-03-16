import Form from './components/Form'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



import ListItem from './components/ListItem'
function App() {

  const [list, setList] = useState('')

  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList)
  }

  return (
    <div className="container mt-3">
      <h1 className='text-center text-white bg-danger'>TODO LIST</h1>
      <Form setList={setList} />
      <ListItem list={list} onRemove={handleRemove} />
    </div>
  );
}

export default App;
