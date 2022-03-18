import Form from './components/Form'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



import ListItem from './components/ListItem'
function App() {
  const [list, setList] = useState('')
  const [status, setStatus] = useState(false)


  const handleRemove = (id) => {
    const deleteFromList = list.filter((item) => item.id !== id);
    setList(deleteFromList)
  }

  // const handleUpdate = (id) => {
  //   const updateItem = list.filter((item) => item.id !== id);
  //   setList(updateItem)
  // }


  const handleUpdate = (itemId) => {
    const newList = list.map((item) => {
      if (item.id === itemId) {
        const updatedItem = {
          ...item,
          isComplete: !item.isComplete,
        };
        return updatedItem;
      }
      return item;
    });

    setList(newList);
  }





  return (
    <div className="container mt-3">
      <h1 className='text-center text-white w-50 m-auto rounded' style={{
        fontSize: "2rem",
        backgroundColor: "rgb(225 215 1)"
      }}>TODO LIST</h1>

      <Form setList={setList} list={list} />

      <ListItem list={list} onRemove={handleRemove} status={status} setStatus={setStatus} handleUpdate={handleUpdate} />

    </div>
  );
}

export default App;
