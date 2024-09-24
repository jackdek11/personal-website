import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const KinectApp = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const mouse = useRef(new THREE.Vector3(0, 0, 1));
  const center = useRef(new THREE.Vector3(0, 0, -1000));

  useEffect(() => {
    let scene, camera, renderer;
    let geometry, mesh, material;

    const init = () => {
      const container = containerRef.current;

      camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        10000,
      );
      camera.position.set(0, 0, 500);

      scene = new THREE.Scene();

      const texture = new THREE.VideoTexture(videoRef.current);
      texture.minFilter = THREE.NearestFilter;

      const width = 640,
        height = 480;
      const nearClipping = 850,
        farClipping = 4000;

      geometry = new THREE.BufferGeometry();

      const vertices = new Float32Array(width * height * 3);

      for (let i = 0, j = 0, l = vertices.length; i < l; i += 3, j++) {
        vertices[i] = j % width;
        vertices[i + 1] = Math.floor(j / width);
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

      material = new THREE.ShaderMaterial({
        uniforms: {
          map: { value: texture },
          width: { value: width },
          height: { value: height },
          nearClipping: { value: nearClipping },
          farClipping: { value: farClipping },
          pointSize: { value: 2 },
          zOffset: { value: 1000 },
        },
        blending: THREE.AdditiveBlending,
        depthTest: false,
        depthWrite: false,
        transparent: true,
      });

      mesh = new THREE.Points(geometry, material);
      scene.add(mesh);

      const gui = new GUI();
      gui
        .add(material.uniforms.nearClipping, 'value', 1, 10000, 1.0)
        .name('nearClipping');
      gui
        .add(material.uniforms.farClipping, 'value', 1, 10000, 1.0)
        .name('farClipping');
      gui
        .add(material.uniforms.pointSize, 'value', 1, 10, 1.0)
        .name('pointSize');
      gui.add(material.uniforms.zOffset, 'value', 0, 4000, 1.0).name('zOffset');

      videoRef.current.play();

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      document.addEventListener('mousemove', onDocumentMouseMove);
      window.addEventListener('resize', onWindowResize);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onDocumentMouseMove = event => {
      mouse.current.x = (event.clientX - window.innerWidth / 2) * 8;
      mouse.current.y = (event.clientY - window.innerHeight / 2) * 8;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      camera.position.x += (mouse.current.x - camera.position.x) * 0.05;
      camera.position.y += (-mouse.current.y - camera.position.y) * 0.05;
      camera.lookAt(center.current);
      renderer.render(scene, camera);
    };

    init();
    animate();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <div>
      <div ref={containerRef}></div>
      <video
        id="video"
        loop
        muted
        crossOrigin="anonymous"
        playsInline
        style={{ display: 'none' }}
        ref={videoRef}
      >
        <source src="textures/kinect.webm" />
        <source src="textures/kinect.mp4" />
      </video>
    </div>
  );
};

export default KinectApp;
