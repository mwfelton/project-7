import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

const PhotoContainer = props => {

  const results = props.data;
  let pics = results.map(pic =>
    <Photo url={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} />
  )

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {pics}
        {/* <li>
          <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
        </li>
        <li>
          <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
        </li>
        <li>
          <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
        </li> */}
        
        <NotFound />
      </ul>
    </div>
  )
}


export default PhotoContainer;

// class PhotoContainer extends React.Component {

//   render() {
//       return (
//       <div className="photo-container">
//         <h2>Results</h2>
//         <ul>
//           <Photo />
//           <li>
//             <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
//           </li>
//           <li>
//             <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
//           </li>
//           <li>
//             <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
//           </li>
          
//           <NotFound />
//         </ul>
//     </div>
//       )
//   }
// };