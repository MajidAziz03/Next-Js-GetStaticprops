import React from 'react'

import axios from 'axios'

 export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  console.log(data)
  return {
    props: {
      data
    }
  }
}




const index = ({data}) => {
  return (
    <>
    <h1> Rest Api </h1>
      {
        data.slice(0,5).map((item) => {
          return ( <div key={item.id}>
            <h3> {item.id} </h3>
            <h3> {item.title} </h3>
          </div>
          )
        })
    }
    </>
  )
}

export default index