import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import earthUrl from './images/earth.jpg';
import earthBumpUrl from './images/earth_bump.png';

export default function RotatingEarth() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return; 

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 2, 6);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    // Earth
    const loader = new THREE.TextureLoader();
    const earthGeo = new THREE.SphereGeometry(1, 64, 64);
    earthGeo.scale(1, 0.95, 1);
    const earthMat = new THREE.MeshStandardMaterial({
      roughness: 1,
      metalness: 0,
      bumpScale: 1,
    });

    loader.load(earthBumpUrl, (bumpTex) => {
      bumpTex.colorSpace = THREE.LinearSRGBColorSpace;
      earthMat.bumpMap = bumpTex;
      earthMat.needsUpdate = true;
    });

    loader.load(earthUrl, (diffuseTex) => {
      diffuseTex.colorSpace = THREE.SRGBColorSpace;
      earthMat.map = diffuseTex;
      earthMat.needsUpdate = true;
    });

    const earth = new THREE.Mesh(earthGeo, earthMat);
    scene.add(earth);

    // Animation
    const clock = new THREE.Clock();
    let frameId;
    const animate = () => {
      earth.rotation.y = clock.getElapsedTime() * 0.3;
      controls.update();
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', onResize);
      controls.dispose();
      cancelAnimationFrame(frameId);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div ref={mountRef} style={{ width: '100vw', height: '100vh', overflow: 'hidden' }} />
      <button
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '6px',
          border: 'none',
          background: 'pink',
          color: 'white',
          cursor: 'pointer',
          zIndex: 10,
        }}
        onClick={() => (window.location.href = '/')}
      >
        ← Back
      </button>
    </>
  );
}
