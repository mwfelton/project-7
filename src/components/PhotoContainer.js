import React from 'react';
import NoPhotos from './NoPhotos';
import Photo from './Photo';

const PhotoContainer = (props) => {
  const results = props.data;
  let pics;

  if (results.length > 0) {
  pics = results.map(pic => 
    <Photo 
      url={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id}/>
    )
  } else {
    pics = <NoPhotos />
  }
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {pics}
      </ul>
    </div>
  );
};

export default PhotoContainer;
