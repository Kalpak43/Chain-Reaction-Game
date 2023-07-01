import { useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei';
import Sphere1 from "./Sphere1";

export default function Sphere() {


    return (
        <div className="bg-gray-50 h-full w-full">
            <Canvas>
                <Sphere1 />
            </Canvas>
        </div >
    )
}