import React from 'react'

export default function ReviewContent(props) {
  return (
    <div>
      <div className="card">
        <img src={props.src} width="80px" height="400px" className="card-img-top" />
        <div className="card-body">

          <h5 className="card-title"> {props.name} </h5>

          <p className="card-text">
            {props.description}
          </p>

        </div>
      </div>
    </div>
  )
}
