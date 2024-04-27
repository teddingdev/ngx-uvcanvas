export function createFragment(sqrt = '1.732', scale = '10.0'): string {
  return `#version 300 es
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;

in vec2 vUv;
out vec4 fragColor;

// Special thanks to The Art of Code
//     - https://www.youtube.com/c/TheArtofCodeIsCool/videos
//     - https://www.shadertoy.com/user/BigWIngs

float myArray[5];
float sqrt = ${sqrt};
float scale = ${scale};

vec3 colors[4]=vec3[4](
                  // vec3(255.0, 218.0, 169.0) * (1.0 / 255.0), // yellow
                  // vec3(111.0, 163.0, 169.0) * (1.0 / 255.0), // turqoise (greenish)
                  // vec3(95.0, 114.0, 178.0) * (1.0 / 255.0), // blue
                  // vec3(96.0, 54.0, 111.0) * (1.0 / 255.0) // purple
                  vec3(255.0, 235.0, 59.0) * (1.0 / 255.0), // yellow
                  vec3(0.0, 230.0, 118.0) * (1.0 / 255.0), // turqoise (greenish)
                  vec3(68.0, 138.0, 255.0) * (1.0 / 255.0), // blue
                  vec3(106.0, 27.0, 154.0) * (1.0 / 255.0) // purple
                  );


float HexDist(vec2 p){
    p = abs(p);

    float rightEdge = p.x;
    float upperRightEdge = dot(p, normalize(vec2(1.0, ${sqrt})));
    return max(rightEdge, upperRightEdge);
}

vec2 complexMul(vec2 v, vec2 c) {
    float real = (v.x * c.x) - (v.y * c.y);
    float imaginary = (v.x * c.y) + (v.y * c.x);
    return vec2(real, imaginary);
}

void main()
{
    float resXYRatio = uResolution.x / uResolution.y;
    vec2 uv = ((vUv.xy*uResolution.xy/uResolution.y) - 0.5 * vec2(resXYRatio, 1)) * 2.0;
    vec2 cRotateZoom = vec2(cos(uTime * 0.2), sin(uTime));
    uv = complexMul(uv, cRotateZoom);
    uv.x += uTime + 5.0;

    vec2 uvScaled = uv * scale;
    vec2 gridScale = vec2(1.0, ${sqrt});
    vec2 a = (mod(uvScaled, gridScale) - 0.5 * gridScale);
    vec2 b = (mod(uvScaled + 0.5*gridScale, gridScale) - 0.5 * gridScale);

    vec2 hexUV = dot(a,a) < dot(b,b) ? a : b;
    vec2 hexIndex = round(uvScaled - hexUV);
    float breath = (-cos(uTime * 3.0 + ((hexIndex.x + 17.0) * (hexIndex.y - 19.0))) + 1.0) * 0.5;

    vec3 col;
    float hexOn = step(0.45 * breath, HexDist(hexUV));
    uint hexColorIndex = uint((hexIndex.x * 17.0) * (hexIndex.y * 43.0)) % 3u;

    col.rgb = (1.0 - hexOn) * colors[hexColorIndex];
    col.rgb += hexOn * colors[3];

    // Output to screen
    fragColor = vec4(col,1.0);
}
`;
}
