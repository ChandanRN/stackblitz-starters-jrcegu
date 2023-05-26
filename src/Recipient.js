import React from 'react';

const Recipient = function (props) {
  return (
    <div className="recipient-container">
      <span>To </span>
      <span>
        {/* TODO 6: Render value of prop with the name "recipientName" */}
        <h3>{props.recipientName}</h3>
      </span>
    </div>
  );
};

export default Recipient;
