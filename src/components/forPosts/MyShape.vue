<template>
    <div class="three-d-group">
        <div class="l-shape">
            <div class="face-me side side-1a">Side</div>
            <div class="face-me side side-1b"></div>
            <div class="face-me front front-1">Front 1</div>
            <div class="face-me front front-2">Front 2</div>
            <div class="face-me side side-2a">Other Side</div>
            <div class="face-me side side-2b"></div>
            <div class="face-me rear">Rear</div>
            <div class="face-me plane plane-top-1">Plane Top 1</div>
            <div class="face-me plane plane-top-2">Plane Top 2</div>
            <div class="face-me plane plane-bottom">Plane Bottom</div>
            <div class="face-me plane plane-bottom shadow"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/style/_colors.scss";
$color-l-shape: hsl(35, 44%, 28%);
fieldset {
    display: flex;
}
label {
    text-align: center;
    padding: 2rem;
    display: inline-block;
}
.this-input {
    margin-top: 3rem;
    height: 32rem;
}
.three-d-group {
    width: 100%;
    height: 48rem;
    background-color: red;
    overflow: hidden;
    border-radius: var(--radius);
    display: flex;
}
.l-shape {
    font-size: 12px;
    width: 100%;
    height: 100%;
    backface-visibility: visible;
    perspective-origin: 50% 50%;
    transform-style: preserve-3d;
    transform: perspective(60em) rotateX(-30deg) rotateY(-30deg);
}
.face-me {
    display: block;
    position: absolute;
    border-radius: 0.25em;
    font-family: sans-serif;
    color: white;
    text-align: center;
    background: $color-l-shape;
}
.side {
}
.side-1a {
    width: 10em;
    height: 30em;
    line-height: 30em;
    transform: translateZ(5em);
}
.side-1b {
    width: 10em;
    height: 10em;
    line-height: 10em;
    transform: translateX(10em) translateY(20em) translateZ(5em);
}
.side-2a {
    width: 10em;
    height: 30em;
    line-height: 30em;
    transform: rotateY(180deg) translateZ(5em);
}
.side-2b {
    width: 10em;
    height: 10em;
    line-height: 10em;
    transform: translateX(10em) rotateY(180deg) translateY(20em) translateZ(5em);
}
.front {
}
.front-1 {
    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        @include linear-gradient(0deg, black, 0.5, 100%);
    }
    width: 10em;
    height: 20em;
    line-height: 20em;
    transform: rotateY(90deg) translateZ(5em);
}
.front-2 {
    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        @include linear-gradient(180deg, black, 0.2, 100%);
    }
    width: 10em;
    height: 10em;
    line-height: 10em;
    transform: translateX(10em) rotateY(90deg) translateY(20em) translateZ(5em);
}
.rear {
    background: var(--border-color);
    width: 10em;
    height: 30em;
    line-height: 30em;
    transform: rotateY(-90deg) translateZ(5em);
}
.plane {
}
.plane-top-1 {
    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        @include linear-gradient(260deg, black, 0.15, 100%);
    }
    width: 10em;
    height: 10em;
    line-height: 10em;
    transform: rotateX(90deg) translateZ(5em);
}
.plane-top-2 {
    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        @include linear-gradient(90deg, black, 0.35, 100%);
    }
    width: 10em;
    height: 10em;
    line-height: 10em;
    transform: translateX(10em) translateY(20em) rotateX(90deg) translateZ(5em);
}
.plane-bottom {
    width: 20em;
    height: 10em;
    line-height: 10em;
    transform: translateY(20em) rotateX(-90deg) translateZ(5em);
}
.shadow {
    width: 20em;
    height: 10em;
    transform: translateY(20.5em) rotateX(-90deg) translateZ(5em);
    background-color: rgba(black, 0.5);
    border-radius: 10em;
    filter: blur(4em);
}
</style>
