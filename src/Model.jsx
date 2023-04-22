import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Model(props) {
  const devil = useLoader(GLTFLoader, "/static/devil.glb");
  console.log(devil);
  return <primitive object={devil.scene} scale={0.05} position={[0, -3, 0]} />;
}
