import React from 'react';

function Bin({ bin }) {
  return (
    <div className="sidebar-bin">
      <div className="icon">
        <img
          src={require(`../../images/${
            bin.level <= 40 ? 'trash' : bin.level >= 80 ? 'full' : 'warning'
          }.svg`)}
          alt="bin"
        />
      </div>
      <div className="details">
        <h1>{bin.name}</h1>
        <h2>
          <b>Level:</b> {bin.level}%
        </h2>
        <div className="coordinates">
          <p>
            <b>Lat:</b> {bin.lat}
          </p>
          <p>
            <b>Lng:</b> {bin.lng}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bin;
