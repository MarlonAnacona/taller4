import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Floor from './Floor'
import { useRef } from 'react'
import { SpotLightHelper } from 'three'
import Image from './Image'
import Video from './Video'
import {  Model } from './Model'


export default function Experience() {

    const SpotLightRef = useRef()
    useHelper(SpotLightRef, SpotLightHelper, 3)

    
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        
        <spotLight ref={SpotLightRef} castShadow position={[0, 3, -6]} intensity={1.5} />

        <ambientLight intensity={0.5} />
        
        <Floor/>
        <Model position-y={-2} scale={0.5} castShadow/>
        <Image/>
        <Video/>
    
    </>
}