import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    fov: 90,
    near: 0.1,
    far: 200,
    position: [10, 11,20]
}

root.render(
    <Canvas camera={cameraSettings} shadows={true}>
        <Experience />
    </Canvas>
)