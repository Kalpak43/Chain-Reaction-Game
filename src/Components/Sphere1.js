import { useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber"

export default function Sphere1() {
    const boxRef = useRef();

    useFrame(() => {
        boxRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25} castShadow>
            <sphereBufferGeometry attach="geometry" args={[2, 32, 32]} />
            {/* <sphereBufferGeometry attach="geometry" args={[1, 32, 32]}/> */}
            <ambientLight intensity={0.2} />
            <spotLight position={[10, 15, 10]} angle={0.5} />
            <meshLambertMaterial attach="material" color="red" />
        </mesh>
    )
}