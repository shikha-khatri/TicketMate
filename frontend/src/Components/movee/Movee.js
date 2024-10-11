import React, { useState } from 'react'
import './movee.css'
const Movee = () => {
  const [rows, setRows] = useState([])
  // const [cardinRow,setcardinRow]= useState()
  const onClickAdd = () => {
    const row_arr = [...rows]
    row_arr.push({
      row_name: 'row_n',
      cards: [],
    })

    setRows(row_arr)
  }
  const onClickDelete = ()=>{
    const row_arr = [...rows]; 
    
  }
  const onClickEdit = () => {}

  return (
    <div>
      <div className="App">
        <button
          className="button"
          style={{ margin: '10px' }}
          onClick={onClickAdd}
        >
          Add
        </button>
        <button
          className="button"
          style={{ margin: '10px' }}
          onClick={onClickEdit}
        >
          Edit
        </button>
       

        <div className="container">
          {rows.map((ele, index) => {
            return (
              <div
                key={index}
                style={{ border: '2px solid black', padding: '20px' }}
              >
                <div>{index.row_name}</div>
                {ele.cards.map((ele2, index2) => {
                  return (
                    <>
                      <div className="card" style={{width:"300px"}}>1</div>
                      <button
                        className="button"
                        style={{ margin: '10px', color:"black" }}
                        onClick={onClickDelete}
                      >
                        Delete
                      </button>
                    </>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Movee
