import React from "react"
// import Image from "react-dom"; 
const Back = ({ name, title, cover }) => {
  console.log(cover)
  return (
    <>
      <div className='back' style={
        {backgroundImag: (cover) }
      }>
        <div className='container'>
          <span>{name}</span>
          <h1>{title}</h1>
        </div>
       
       {/* <Image src={cover}></Image> */}
        <img src={cover} alt='test'  />
      </div>
    </>
    
  )
}

export default Back
