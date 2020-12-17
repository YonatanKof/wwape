<template>
    <div class="three-d-group">
        <div class="pressss l-shape">
            <div class="face-me side side-1a">Side 1A</div>
            <div class="face-me side side-1b">Side 1B</div>
            <div class="face-me front front-1">Front 1</div>
            <div class="face-me front front-2">Front 2</div>
            <div class="face-me side side-2a">Side 2A</div>
            <div class="face-me side side-2b">Side Ab</div>
            <div class="face-me rear">Rear</div>
            <div class="face-me plane plane-top-1">Plane Top 1</div>
            <div class="face-me plane plane-top-2">Plane Top 2</div>
            <div class="face-me plane plane-bottom">Plane Bottom</div>
        </div>
    </div>
</template>

<style lang="scss">
.pressss {
    transition: all 0.35s;
}

.three-d-group {
    font-size: 16px;
    width: 100%;
    height: 32rem;
    background-color: burlywood;
}
.l-shape {
    width: 100%;
    height: 100%;
    backface-visibility: visible;
    perspective-origin: 150% 150%;
    transform-style: preserve-3d;
    perspective: 5000em;
    transform: rotateX(-30deg) rotateY(-30deg);
}
.face-me {
    display: block;
    position: absolute;
    border: coral solid 0.1em;
    font-family: sans-serif;
    color: white;
    text-align: center;
}
.side {
    background: rgba(black, 0.1);
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
    background: rgba(black, 0.3);
}
.front-1 {
    width: 10em;
    height: 20em;
    line-height: 20em;
    transform: rotateY(90deg) translateZ(5em);
}
.front-2 {
    width: 10em;
    height: 10em;
    line-height: 10em;
    transform: translateX(10em) rotateY(90deg) translateY(20em) translateZ(5em);
}
.rear {
    background: rgba(black, 0.1);
    width: 10em;
    height: 30em;
    line-height: 30em;
    transform: rotateY(-90deg) translateZ(5em);
}
.plane {
    background: rgba(black, 0.1);
}
.plane-top-1 {
    width: 10em;
    height: 10em;
    line-height: 10em;
    transform: rotateX(90deg) translateZ(5em);
}
.plane-top-2 {
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
</style>
