import { ApplicationOptions } from "pixi.js";

const canvasSize: number = Math.min(innerWidth, innerHeight);
export default {
    resolution: window.devicePixelRatio || 1,
    backgroundColor: 0xffffff,
    antialias: true,
    width: canvasSize,
    height: canvasSize,
} as Partial<ApplicationOptions>;