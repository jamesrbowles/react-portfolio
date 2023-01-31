import React from "react";

import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 64, 64]} scale={1}>
      <MeshDistortMaterial
        color="#2cb67d"
        attach="material"
        distort={0.3}
        speed={1.5}
      />
    </Sphere>
  );
};

export default AnimatedSphere;
