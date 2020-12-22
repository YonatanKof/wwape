<template>
    <div class="three-d-group">
        <div
            class="l-shape"
            v-bind:style="[
                {
                    transform:
                        'scale(' +
                        compScale +
                        ') perspective(' +
                        compPres +
                        'em) translateY(' +
                        compAxleY +
                        'em) rotateY(' +
                        compRotY +
                        'deg)',
                },
            ]"
        >
            <div class="face-me side side-1a">Side</div>
            <div class="face-me side side-1b"></div>
            <div class="face-me front front-1">Front</div>
            <div class="face-me front front-2">Front</div>
            <div class="face-me side side-2a">Other Side</div>
            <div class="face-me side side-2b"></div>
            <div class="face-me rear">Rear</div>
            <div class="face-me plane plane-top-1">Plane Top</div>
            <div class="face-me plane plane-top-2">Plane Top</div>
            <div class="face-me plane plane-bottom">Plane Bottom</div>
            <div class="face-me plane plane-bottom shadow"></div>
        </div>
        <fieldset class="pers-form">
            <label class="pers-form__label" for="perspective"
                >Perspective
                <!-- <span>Narrow</span> -->
                <input
                    class="pers-form__input"
                    id="perspective"
                    type="range"
                    min="30"
                    max="300"
                    v-bind:value="compPres"
                    v-on:input="onCompPres"
                />
                <!-- <span>Wide</span> -->
            </label>

            <label class="pers-form__label" for="scale"
                >Distance
                <input
                    class="pers-form__input"
                    id="scale"
                    type="range"
                    min=".5"
                    max="1.5"
                    step="0.01"
                    v-bind:value="compScale"
                    v-on:input="onCompScale"
                />
            </label>
            <label class="pers-form__label" for="rot-y"
                >Rotate Y
                <input
                    class="pers-form__input"
                    id="rot-y"
                    type="range"
                    min="-60"
                    max="400"
                    v-bind:value="compRotY"
                    v-on:input="onCompRotY"
                />
            </label>
            <label class="pers-form__label" for="axel-y"
                >Height
                <input
                    class="pers-form__input"
                    id="axel-y"
                    type="range"
                    min="-20"
                    max="40"
                    v-bind:value="compAxleY"
                    v-on:input="onCompAxleY"
                />
            </label>
        </fieldset>
    </div>
</template>

<script>
export default {
    data() {
        return {
            compPres: 40,
            compRotY: 320,
            compScale: 1,
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
@import "../../assets/style/_colors.scss";

$color-l-shape: hsl(35, 85%, 55%);

.pers-form {
    z-index: 100;
    display: flex;
    flex-direction: column;
    &__label {
        padding: 1rem 0;
        text-align: start;
        display: inline-block;
    }
    &__input {
        padding: 1rem 0;
    }
}
.three-d-group {
    z-index: 0;
    width: 100%;
    height: 48rem;
    background-color: var(--bg-primary);
    overflow: hidden;
    border-radius: var(--radius);
    display: flex;
}
.l-shape {
    font-size: 12px;
    font-weight: 900;
    width: 100%;
    height: 100%;
    backface-visibility: visible;
    // perspective-origin: 50% 50%;
    transform-style: preserve-3d;
}
.face-me {
    display: block;
    position: absolute;
    border-radius: 0.25em;
    font-family: sans-serif;
    color: white;
    text-align: center;
    background-color: $color-l-shape;
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
