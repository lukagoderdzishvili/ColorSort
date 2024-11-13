import { ApplicationOptions } from "pixi.js";

export default {
    resolution: window.devicePixelRatio || 1,
    backgroundColor: '#000000',
    antialias: true,
    resizeTo: window
} as Partial<ApplicationOptions>;