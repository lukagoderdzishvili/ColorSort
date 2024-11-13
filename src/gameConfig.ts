import { ApplicationOptions } from "pixi.js";

// const canvasSize: number = Math.min(innerWidth, innerHeight);
export default {
    resolution: window.devicePixelRatio || 1,
    backgroundColor: '#000000',
    antialias: true,
    // width: canvasSize,
    // height: canvasSize,
    resizeTo: window
} as Partial<ApplicationOptions>;