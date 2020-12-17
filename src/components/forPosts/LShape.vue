<template>
    <div class="three-d-group">
        <div class="pressss l-shape">
            <div class="face-me side side-1">Side 1</div>
            <div class="face-me side side-2">Side 2</div>
            <div class="face-me front front-1">Front 1</div>
            <div class="face-me front front-2">Front 2</div>
        
        </div>
    </div>
</template>

<style lang="scss">
.pressss {
    transition: all 0.35s;
}

.three-d-group {
    font-size: 4px;
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
    perspective: 1000em;
}
.face-me {
    display: block;
    position: absolute;
    border: none;
    border: coral solid 0.1em;
    font-family: sans-serif;
    font-size: 2em;
    color: white;
    text-align: center;
}
.side{
    background: rgba(black, 0.1);
}
.side-1{
    width: 10em;
    height: 20em;
    line-height: 20em;
    transform: translateZ(5em);
    }
.side-2{
    width: 20em;
    height: 10em;
    line-height: 10em;
    transform: translateY(20em) translateZ(5em);
}
.front{
    background: rgba(black, 0.3);
    
}
.front-1{
    width: 10em;
    height: 20em;
    line-height: 20em;
    transform: rotateY(90deg) translateZ(5em) ;
    }
.front-2{
    width: 10em;
    height: 10em;
    line-height: 10em;
    transform:  translateX(10em) rotateY(90deg) translateY(20em) translateZ(5em);
}
</style>
