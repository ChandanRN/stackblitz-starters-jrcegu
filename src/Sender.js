import React from 'react';

const Sender = function (props) {
  return (
    <div className="sender-container">
      <span>
        {/* TODO 9: Render value of prop with the name "senderName" */}

        <h2> {props.senderName}</h2>
      </span>
    </div>
  );
};

export default Sender;
