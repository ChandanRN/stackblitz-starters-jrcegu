import React from 'react';

const Message = function (props) {
  return (
    <div className="message-container">
      <span>
        {/* TODO 8: Render value of prop with the name "birthdayWishes" */}
        <h2> {props.birthdayWishes}</h2>
      </span>
    </div>
  );
};

export default Message;
