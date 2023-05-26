import React from 'react';

const Picture = function (props) {
  return (
    <div className="picture-container">
      {/* TODO 7: Render an image tag with its src attribute having value of the prop with name "pictureUrl" */}
      <img src={props.pictureUrl} alt="Birthday" />
    </div>
  );
};

export default Picture;
