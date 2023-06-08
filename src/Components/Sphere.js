import { useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import texture from '../images/texture.jpg'
import { OrbitControls } from '@react-three/drei';

export default function Sphere() {
    
    const textureMap = useLoader(TextureLoader, texture)

    return (
        <div className="bg-gray-50 h-full w-full">
            <Canvas>
                <mesh >
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.2} />
                    <directionalLight position={[-2, 10, 2]} intensity={1} />
                    <sphereBufferGeometry attach='geometry' args={[2, 32]} />
                    <meshStandardMaterial map={textureMap} />
                    {/* <meshLambertMaterial attach='material' color='blue' /> */}
                </mesh>
            </Canvas>
            <group>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
                    <planeBufferGeometry attach='geometry' args={[100, 100]} />
                    <meshStandardMaterial attach='material' color='green' />
                </mesh>
            </group>
        </div >
    )
}