precision mediump float;

uniform float iTime;
uniform vec2 iResolution;
uniform float offset;

void main() {
    float time = 0.0;
	vec2 fragCoord = gl_FragCoord.xy/iResolution;
    // post
	gl_FragColor = vec4(fragCoord.x,fragCoord.y,0.0, 1.0);
}