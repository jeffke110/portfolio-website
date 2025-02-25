import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Clogo = ({ position }) => {
  const { scene } = useGLTF('models/Clogo.glb'); // Ensure scene is extracted
  const logoRef = useRef();

  // Use GSAP to create a floating animation
  useGSAP(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current.position, {
        y: '+=0.3', // Moves up by 0.3 units
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut', // Smooth easing
      });
    }
  }, []);

  return (
    <group ref={logoRef} position={position} scale={.033}>
    <primitive object={scene} />
  </group>
  );
};

useGLTF.preload('models/Clogo.glb');

export default Clogo;
