import React from 'react';
import Recipient from './Recipient.js';
import Picture from './Picture.js';
import Message from './Message.js';
import Sender from './Sender.js';

const HappyBirthdayCard = function () {
  return (
    <div className="main-container">
      {/* TODO 2: Catch prop with the name "recipientName" and pass it down to Recipient component */}
      <Recipient recipientName="Chandan R N" />

      {/* TODO 3: Catch prop with the name "pictureUrl" and pass it down to Picture component */}
      <Picture pictureUrl="https://wishes.moonzori.com/wp-content/uploads/2023/04/Happy-Birthday-Birthday-Wishes-and-Images-Moonzori.png" />

      {/* TODO 4: Catch prop with the name "birthdayWishes" and pass it down to Message component */}
      <Message birthdayWishes="Happy birthday too mee" />

      {/* TODO 5: Catch prop with the name "senderName" and pass it down to Sender component */}
      <Sender senderName="TO meee" />
    </div>
  );
};

export default HappyBirthdayCard;
