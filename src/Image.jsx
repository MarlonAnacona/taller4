import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import { useState } from "react";

export default function Image() {
  const PATH = "/static/textures/sphere/image/";
  const imagenes = [
    "america1.jpg",
    "america2.jpg",
    "america3.jpg",
    "america5.jpg",
  ];
  var idImage = 0;
  const [textureUrl, setTextureUrl] = useState(imagenes[idImage]);

  const props = useTexture({
    map: PATH + textureUrl,
  });

  const changeImage = () => {
    let idAnterior = textureUrl;
    do {
      idImage = Math.floor(Math.random() * imagenes.length);
    } while (idAnterior == imagenes[idImage]);

    console.log(idImage);
    setTextureUrl(imagenes[idImage]);
  };

  return (
    <mesh
      receiveShadow
      position-z={-9}
      position-y={6.5}
      rotation-z={-Math.PI * 2}
      onDoubleClick={changeImage}
    >
      <planeGeometry args={[18, 18]} />
      <meshStandardMaterial {...props} side={DoubleSide} />
    </mesh>
  );
}
