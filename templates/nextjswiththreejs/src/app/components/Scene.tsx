"use client"
import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "@/app/components/Model";
import { Environment } from "@react-three/drei";
import { DirectionalLight } from "three";
import Background from "three/src/renderers/common/Background.js";


export default function Scene() {
    return (
        <Canvas style={{ backgroundColor: "black" }}>
            <directionalLight intensity={3} position={[0, 3, 2]} />
            <Environment preset="city" />
            <Model />
        </Canvas>
    )
}