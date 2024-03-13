import 'aframe';
// import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'aframe-mountain-component';
function App() {
  const handleClick = () => {
    console.log('Clicked!');
  }

  const [color, setColor] = useState('red');

  const changeColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <>
      <div>Hello</div>
      <Scene>

        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" alt="Ground Texture" />
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg" alt="Sky Texture" />
        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100" />
        <Entity primitive='a-cylinder' color="blue" position="3 0 -3" />
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4" />
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048" />
        <Entity particle-system={{ preset: 'snow', particleCount: 2000 }} />
        <Entity text={{ value: 'Hello, A-Frame React!', align: 'center' }} position={{ x: 0, y: 2, z: -1 }} />
        <Entity
          id="sphere" geometry="primitive: sphere"
          material="color: #EFEFEF; shader: flat"
          position="0 0 0"
          light="type: point; intensity: 5"
          animation="property: position; easing: easeInOutQuad; dir: alternate; dur: 1000; to: 0 -0.10 -5; loop: true"
        >

        </Entity>
        <Entity
          id="box"
          geometry={{ primitive: 'box' }}
          material={{ color: color, opacity: 0.6 }}
          animation__rotate={{ property: 'rotation', dur: 2000, loop: true, to: '360 360 360' }}
          animation__scale={{ property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1' }}
          position={{ x: 0, y: 1, z: -3 }}
          events={{ click: changeColor }}
        >
          <Entity
            animation__scale={{ property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2' }}
            geometry={{ primitive: 'box', depth: 0.2, height: 0.2, width: 0.2 }}
            material={{ color: '#24CAFF' }}
          />
        </Entity>
        <Entity
          primitive="a-nft"
          type="nft"
          url='https://aframe-react-three.vercel.app/sample'
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >

        </Entity>

        <Entity gltf-model="https://aframe-react-three.vercel.app/capture/capture" />

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{ property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150 }} />
        </Entity>

      </Scene>

    </>

  );
}

export default App;
