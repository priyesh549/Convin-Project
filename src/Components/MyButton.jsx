import React from 'react'
import Button from 'react-bootstrap/Button';

function MyButton({onClick,total}) {
  let buttonArr = [];
  for(let i=0;i<total;i++){
    buttonArr.push(i+1);
  }
  return (
    <>
        {
            buttonArr.map((value)=>{
                return <Button key={value} className="mx-4 my-4" size="lg" onClick={()=>onClick(value)}>{value}</Button>
            })
        }
    </>
  )
}

export default MyButton