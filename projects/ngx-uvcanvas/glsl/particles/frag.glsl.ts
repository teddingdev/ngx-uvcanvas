export const frag = /* glsl */ `
                precision highp float;

                uniform float uTime;

                varying vec4 vRandom;

                void main() {
                    vec2 uv = gl_PointCoord.xy;

                    float circle = smoothstep(0.5, 0.4, length(uv - 0.5)) * 0.8;

                    gl_FragColor.rgb = 0.8 + 0.3 * sin(uv.yxx + uTime + vRandom.y * 7.28) + vec3(0.1, 0.0, 0.4);
                    gl_FragColor.a = circle;
                }
            `;
