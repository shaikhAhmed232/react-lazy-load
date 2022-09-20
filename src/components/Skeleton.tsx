import React from 'react'

const Skeleton = () => {
  return (
    <div className="product-container">
      <div className="img-container animate" style={{}}>
      </div>
      <div className="details-container" style={{padding: "4px"}}>
        <div className="title animate"></div>
        <div className="price animate" style={{width: "200px", height: "10px", margin: "2px 0",backgroundColor: "rgb(100, 95, 95)"}}></div>
      </div>
    </div>
  )
}

export default Skeleton