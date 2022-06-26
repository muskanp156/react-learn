import React from "react";

function ScoreCard({ props }) {
  console.log(props);
  return (
    <>
    <div style={{display: "flex"}}>
      {Array.isArray(props) &&
        props.map((val) => {
          return (
            <div style={{ border: "1px solid black", width: "10vw" }}>
              <div> name: {val.name} </div>
              <div>Bid:  {val.bid} </div>
              <div>point:  {val.point} </div>
            </div>
          );
        })}
        </div>
    </>
  );
}

export default ScoreCard;
