<template>
    <div class="three-d-group">
        <div
            class="l-shape"
            v-bind:style="[
                {
                    transform:
                        'scale(' +
                        compScale +
                        '%) perspective(' +
                        compPres +
                        'em) translateY(' +
                        compAxleY +
                        '%) rotateX(' +
                        compRotX +
                        'deg) rotateY(' +
                        compRotY +
                        'deg) rotateZ(' +
                        compRotZ +
                        'deg)',
                },
            ]"
        >
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
        <input
            name="perspective"
            type="range"
            class="this-input"
            min="30"
            max="300"
            v-bind:value="compPres"
            data-sizing="em"
            orient="vertical"
            v-on:input="onCompPres"
        />
        <!-- <input
            name="rot-x"
            type="range"
            class="this-input"
            min="-360"
            max="360"
            v-bind:value="compRotX"
            data-sizing="deg"
            orient="vertical"
            v-on:input="onCompRotX"
        /> -->
        <input
            name="scale"
            type="range"
            class="this-input"
            min="60"
            max="100"
            v-bind:value="compScale"
            data-sizing="deg"
            orient="vertical"
            v-on:input="onCompScale"
        />
        <!-- <input
            name="rot-y"
            type="range"
            class="this-input"
            min="-360"
            max="360"
            v-bind:value="compRotY"
            data-sizing="deg"
            orient="vertical"
            v-on:input="onCompRotY"
        /> -->
        <!-- <input
            name="rot-z"
            type="range"
            class="this-input"
            min="-360"
            max="360"
            v-bind:value="compRotZ"
            data-sizing="deg"
            orient="vertical"
            v-on:input="onCompRotZ"
        /> -->
        <input
            name="axel-y"
            type="range"
            class="this-input"
            min="-25"
            max="25"
            v-bind:value="compAxleY"
            data-sizing="%"
            orient="vertical"
            v-on:input="onCompAxleY"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            compPres: 90,
            compRotX: 0,
            compRotY: 320,
            compRotZ: 0,
            compScale: 80,
            compAxleY: 8, 
        };
    },
    methods: {
        onCompPres(e) {
            this.compPres = e.target.value;
        },
        onCompRotX(e) {
            this.compRotX = e.target.value;
        },
        onCompRotY(e) {
            this.compRotY = e.target.value;
        },
        onCompRotZ(e) {
            this.compRotZ = e.target.value;
        },
        onCompAxleY(e) {
            this.compAxleY = e.target.value;
        },
        onCompScale(e) {
            this.compScale = e.target.value;
        },
    },
};
</script>

<style lang="scss">
.this-input {
    margin: 1rem;
}
.three-d-group {
    width: 100%;
    height: 32rem;
    background-color: var(--bg-primary);
    overflow: hidden;
    border-radius: var(--radius);
    display: flex;
}
.l-shape {
    // transition: all 0.35s;
    font-size: 12px;
    width: 100%;
    height: 100%;
    backface-visibility: visible;
    perspective-origin: 50% 50%;
    transform-style: preserve-3d;
    // perspective: 1000em;
    // transform: rotateX(-30deg) rotateY(-30deg);
    
}
.face-me {
    display: block;
    position: absolute;
    // border: var(--system-color) solid 0.1em;
    border-radius: 0.25em;
    font-family: sans-serif;
    color: white;
    text-align: center;
}
.side {
    // background: var(--border-color);
    background: burlywood;
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
    background: chocolate;
    width: 10em;
    height: 30em;
    line-height: 30em;
    transform: rotateY(180deg) translateZ(5em);
}
.side-2b {
    background: chocolate;
    width: 10em;
    height: 10em;
    line-height: 10em;
    transform: translateX(10em) rotateY(180deg) translateY(20em) translateZ(5em);
}
.front {
    background: salmon;
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
    background: var(--border-color);
    width: 10em;
    height: 30em;
    line-height: 30em;
    transform: rotateY(-90deg) translateZ(5em);
}
.plane {
    background: firebrick;
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
.shadow {
    width: 20em;
    height: 10em;
    transform: translateY(20.5em) rotateX(-90deg) translateZ(5em);
    background-color: rgba(black, 0.5);
    border-radius: 10em;
    filter: blur(4em);
}
</style>
