import { Float, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Car = (props) => {
  const { scene } = useGLTF('models/ps1car.glb'); // Ensure scene is extracted
  const carRef = useRef();

  useGSAP(() => {
    if (carRef.current) {
      gsap.to(carRef.current.position, {
        y: carRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut', // Smooth easing
      });
    }
  }, [carRef.current]); // Add dependency

  return (
    <mesh {...props} ref={carRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

useGLTF.preload('models/ps1car.glb');

export default Car;
