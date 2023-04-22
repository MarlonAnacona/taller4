import { useVideoTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import { useRef, useEffect, useState } from "react";

export default function Video() {
  const [pause, setPause] = useState(false);

  const props = {
    unsuspend: "canplay",
    muted: true,
    loop: true,
    start: pause,
  };

  const videoTexture = useVideoTexture("./static/video/america.mp4", props);

  const playVideo = () => {
    setPause(true);
  };

  return (
    <mesh
      receiveShadow
      position-y={6.5}
      position-x={-9}
      rotation-y={Math.PI * 0.5}
      onClick={playVideo}
    >
      <planeGeometry args={[18, 18]} />
      <meshStandardMaterial map={videoTexture} side={DoubleSide} />
    </mesh>
  );
}
