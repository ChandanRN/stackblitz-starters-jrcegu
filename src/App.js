import React from 'react';
import HappyBirthdayCard from './HappyBirthdayCard.js';

const App = function (props) {
  /* TODO 1: Send props with the following names inside HappyBirthdayCard component
    a) recipientName="WriteRecipientName"
    b) pictureUrl="GivePictureImageUrlFromWeb"
    c) birthdayWishes="WritePersonalizedMessage"
    d) senderName="WriteYourName"
    
    One example can be:
    recipientName="Dad" 
    pictureUrl="https://quotespics.net/wp-content/uploads/2016/08/birthday-cake-with-many-candles-wallpaper-4.jpg" 
    birthdayWishes="I'm grateful for all that you've done for me to make me what I am today!" 
    senderName="Your Daughter"
  */
  return (
    <HappyBirthdayCard
      recipientName="Chandan R N"
      pictureUrl="https://wishes.moonzori.com/wp-content/uploads/2023/04/Happy-Birthday-Birthday-Wishes-and-Images-Moonzori.png"
      birthdayWishes="Happy birthday Chandan R N"
      senderName="Me too"
    />
  );
};

export default App;
