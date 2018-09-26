import * as eases from "../ease";
import { EventEmitter, IKeyDownEvent, IKeyUpEvent, IPointClickEvent, IPointDownEvent, IPointEvent, IPointMoveEvent, IPointUpEvent, IValueChangeEvent } from "../events";
import { ISpriteLoadedEvent } from "../events/SpriteEvents";
import { ISpriteSheet, ITextureMap } from "../spritesheet";
import { Cursor, IInteractionPoint, ISize, ISpritePosition } from "../util";
import { IContainer } from "./Container";
export interface ISprite extends ISize {
    id: string;
    parent: ISprite;
    container: IContainer;
    previousPosition: Float64Array;
    position: Float64Array;
    inverse: Float64Array;
    alpha: number;
    interpolatedAlpha: number;
    previousAlpha: number;
    z: number;
    textures: ITextureMap;
    lastInterpolated: number;
    interpolatedPosition: Float64Array;
    animationStart: number;
    animationLength: number;
    wait: number;
    active: boolean;
    hover: boolean;
    down: boolean;
    focused: boolean;
    tabIndex: number;
    cursor: Cursor;
    loaded: Promise<void>;
    texture: string;
    pointUpEvent: EventEmitter<IPointUpEvent>;
    pointDownEvent: EventEmitter<IPointEvent>;
    pointClickEvent: EventEmitter<IPointClickEvent>;
    pointMoveEvent: EventEmitter<IPointMoveEvent>;
    keyDownEvent: EventEmitter<IKeyDownEvent>;
    keyUpEvent: EventEmitter<IKeyUpEvent>;
    loadedEvent: EventEmitter<ISpriteLoadedEvent>;
    textureChangeEvent: EventEmitter<IValueChangeEvent<string>>;
    ease(ratio: number): number;
    broadPhase(point: IInteractionPoint): boolean;
    narrowPhase(point: IInteractionPoint): ISprite;
    isHovering(point: IInteractionPoint, now: number): ISprite;
    pointCollision(point: IInteractionPoint): boolean;
    setTexture(texture: string): this;
    over(timespan: number, wait: number, ease: (ratio: number) => number): this;
    movePosition(position: ISpritePosition): this;
    move(position: number[] | Float64Array): this;
    setZ(z: number): this;
    setAlpha(alpha: number): this;
    interpolate(now: number): void;
    skipAnimation(now: number): boolean;
    update(): void;
    render(ctx: CanvasRenderingContext2D): void;
    focus(sprite: ISprite): void;
}
export interface ISpriteProps {
    id: string;
    position: Float64Array | number[];
    textures?: ITextureMap;
    alpha?: number;
    z?: number;
    source: Promise<ImageBitmap>;
    definition: Promise<ISpriteSheet>;
}
export declare class Sprite implements ISprite {
    id: string;
    position: Float64Array;
    previousPosition: Float64Array;
    interpolatedPosition: Float64Array;
    inverse: Float64Array;
    alpha: number;
    interpolatedAlpha: number;
    previousAlpha: number;
    z: number;
    parent: ISprite;
    container: IContainer;
    wait: number;
    lastInterpolated: number;
    animationStart: number;
    ease: eases.EaseFunc;
    cursor: Cursor;
    animationLength: number;
    active: boolean;
    hover: boolean;
    down: boolean;
    textures: ITextureMap;
    texture: string;
    loaded: Promise<void>;
    focused: boolean;
    tabIndex: number;
    width: number;
    height: number;
    pointDownEvent: EventEmitter<IPointDownEvent>;
    pointUpEvent: EventEmitter<IPointUpEvent>;
    pointMoveEvent: EventEmitter<IPointMoveEvent>;
    pointClickEvent: EventEmitter<IPointClickEvent>;
    keyDownEvent: EventEmitter<IKeyDownEvent>;
    keyUpEvent: EventEmitter<IKeyUpEvent>;
    loadedEvent: EventEmitter<ISpriteLoadedEvent>;
    textureChangeEvent: EventEmitter<IValueChangeEvent<string>>;
    constructor(props: ISpriteProps);
    broadPhase(point: IInteractionPoint): boolean;
    narrowPhase(point: IInteractionPoint): ISprite;
    pointCollision(point: IInteractionPoint): boolean;
    isHovering(point: IInteractionPoint, now: number): ISprite;
    movePosition(position: ISpritePosition): this;
    move(position: number[] | Float64Array): this;
    setAlpha(alpha: number): this;
    setZ(z: number): this;
    over(timespan: number, wait?: number, ease?: (ratio: number) => number): this;
    skipAnimation(now: number): boolean;
    update(): void;
    interpolate(now: number): void;
    setTexture(texture: string): this;
    render(ctx: CanvasRenderingContext2D): void;
    focus(target: ISprite): void;
    private loadTexture;
}
