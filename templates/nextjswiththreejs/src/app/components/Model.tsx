import React, { useRef } from 'react'
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei"
import { useFrame, useThree } from '@react-three/fiber'
import { Mesh } from 'three'
import { useControls } from 'leva';

export default function model() {

    const mesh = useRef<Mesh>(null);
    const { nodes } = useGLTF("/models/TestModel.glb")
    const { viewport } = useThree();

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += rotationsProps.x;
            mesh.current.rotation.y += rotationsProps.y;
            mesh.current.rotation.z += rotationsProps.z
        }
    })

    const materialProps = useControls({
        thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0, min: 0, max: 1, step: 0.1 },
        transmission: {value: 1, min: 0, max: 1, step: 0.1},
        ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 0.02, min: 0, max: 1},
        backside: { value: true},
    })

    const rotationsProps = useControls({
        x: { value: 0, min: 0, max: 1, step: 0.001 },
        y: { value: 0, min: 0, max: 1, step: 0.001 },
        z: { value: 0, min: 0, max: 1, step: 0.001 }
    })

    return (
        <group scale={viewport.width / 10}>

            <Text
                fontSize={3}
                position={[0, 0, -5]}
            >
                Wetterbro
            </Text>

            <mesh
                ref={mesh}
                geometry={(nodes.Torus as any).geometry}
                material={(nodes.Torus as any).material}
                rotation={[Math.PI / 1, 1, 1]} // Rotate 90 degrees around the x-axis
            >
                {/* Add material or other properties here */}
                <MeshTransmissionMaterial {...materialProps}/>
            </mesh>
        </group>
    )
}

