import React from 'react';
import './App.scss';
import "./styles.css";
import { Image } from './components/Image';
import { popup } from './components/Popup';
import images from './data';

function App() {
  return (
    <React.Fragment>
      <p className="heading">Photoshop Edits</p><hr/>
      <div className="flex-container">
          {images.map(data => (
            <div className="flex-item" key={`${data.id}`}>
              <Image data={data} />
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}

export default App;
