import './style.css'
import * as PIXI from 'pixi.js';
import gameConfig from './gameConfig';

class Game{
    private _gameApplication!: PIXI.Application;
    private _parentNode: HTMLElement | null = document.querySelector('#app');
    
    constructor(){
        this._initGame();
    }
    
    private async _initGame(): Promise<void>{
        this._gameApplication = new PIXI.Application();
        await this._gameApplication.init(gameConfig);

        this._parentNode?.appendChild(this._gameApplication.canvas);
    }
}


(async () =>  new Game())();