import { ShaderMaterial, Vector2 } from 'three';
import { extend } from '@react-three/fiber';

class CustomShaderMaterial extends ShaderMaterial {
    constructor() {
        super({
            uniforms: {
                u_time: { value: 0.0 },
                u_resolution: { value: new Vector2() },
            },
            vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        uniform float u_time;
        varying vec2 vUv;
        void main() {
          vec2 st = vUv;
          vec3 color = vec3(0.0);
          color = vec3(st.x, st.y, abs(sin(u_time)));
          gl_FragColor = vec4(color, 1.0);
        }
      `,
        });
    }
}

extend({ CustomShaderMaterial });

export { CustomShaderMaterial };