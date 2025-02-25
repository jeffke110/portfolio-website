import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useRef } from 'react';

const Python = ({ position }) => {
  const { scene } = useGLTF('models/python.glb'); // Load the GLB model
  const modelRef = useRef();

  useGSAP(() => {
    if (modelRef.current) {
      gsap.to(modelRef.current.rotation, {
        y: `+=${Math.PI * 2}`,
        duration: 10,
        repeat: -1,
        ease: 'linear',
      });
    }
  }, []);

  return (
    <group ref={modelRef} position={position} scale={.033}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload('models/python.glb');

export default Python;
