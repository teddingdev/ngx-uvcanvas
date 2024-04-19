export const frag = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;

varying vec2 vUv;

void main() {
    gl_FragColor.rgb = 0.8 + 0.4 * cos(uTime + vUv.xyx + vec3(0,2,4));
    gl_FragColor.a = 1.0;
}
`;
