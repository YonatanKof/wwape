<template>
    <div class="three-d-group">
        <div class="l-shape-cont">
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
                            'deg) translateX(-8em)',
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
                <GridLine
                    class="face-me grid-line"
                    v-bind:style="[
                        {
                            transform:
                                'scaleX(2) scaleZ(2) rotateX(90deg) translateX(-2.5em) translateZ(' +
                                compGridLineY +
                                'em)',
                        },
                    ]"
                />
            </div>
        </div>
        <fieldset class="pers-form">
            <label
                v-if="showCompPres"
                class="pers-form__label"
                for="perspective"
                >Station Point
                <input
                    class="pers-form__input"
                    id="perspective"
                    type="range"
                    min="40"
                    max="300"
                    v-bind:value="compPres"
                    v-on:input="onCompPres"
                />
            </label>

            <label v-if="showCompScale" class="pers-form__label" for="scale"
                >Size
                <input
                    class="pers-form__input"
                    id="scale"
                    type="range"
                    min=".25"
                    max="1.5"
                    step="0.01"
                    v-bind:value="compScale"
                    v-on:input="onCompScale"
                />
            </label>
            <label v-if="showCompRotY" class="pers-form__label" for="rot-y"
                >Rotation
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
            <label v-if="showCompAxleY" class="pers-form__label" for="axel-y"
                >Horizon Plane (Viewer Height)
                <input
                    class="pers-form__input"
                    id="axel-y"
                    type="range"
                    min="-5"
                    max="40"
                    v-bind:value="compAxleY"
                    v-on:input="onCompAxleY"
                />
            </label>
            <label
                v-if="showGridLineY"
                class="pers-form__label"
                for="grid-line-y"
                >Ground Plane
                <input
                    class="pers-form__input"
                    id="grid-line-y"
                    type="range"
                    min="-5"
                    max="25"
                    step="1"
                    v-bind:value="compGridLineY"
                    v-on:input="onCompGridLineY"
                />
            </label>
        </fieldset>
    </div>
</template>

<script>
import GridLine from "../forPosts/GridLine.vue";

export default {
    components: {
        GridLine,
    },
    props: [
        "showCompPres",
        "showCompScale",
        "showCompRotY",
        "showCompAxleY",
        "showGridLineY",
    ],
    data() {
        return {
            compPres: 55,
            compRotY: 320,
            compScale: 1,
            compAxleY: 6,
            compGridLineY: -5,
        };
    },
    methods: {
        onCompPres(e) {
            this.compPres = e.target.value;
        },
        onCompRotY(e) {
            this.compRotY = e.target.value;
        },
        onCompAxleY(e) {
            this.compAxleY = e.target.value;
        },
        onCompScale(e) {
            this.compScale = e.target.value;
        },
        onCompGridLineY(e) {
            this.compGridLineY = e.target.value;
        },
    },
};
</script>

<style lang="scss">
@import "../../assets/style/_colors.scss";
@import "../../assets/style/_layout.scss";

$color-l-shape: hsl(35, 85%, 55%);

.three-d-group {
    z-index: 0;
    width: 100%;
    height: 40rem;
    background-color: var(--bg-primary);
    overflow: hidden;
    border-radius: var(--radius);
    display: flex;
    @include mQ-max($display-size-sm) {
        margin-inline-start: calc(var(--content-space) * -1);
        margin-inline-end: calc(var(--content-space) * -1);
        max-width: unset;
        width: calc(100% + 4rem);
        border-radius: 0;
    }
    margin-block-end: var(--space-md);
}
.l-shape-cont {
    width: 60%;
    padding: 2rem;
    padding-inline-end: 1rem;
}
.l-shape {
    font-size: 12px;
    font-weight: 900;
    width: 100%;
    height: 100%;
    backface-visibility: visible;
    transform-style: preserve-3d;
}
.face-me {
    display: block;
    position: absolute;
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
    transform: translateX(10em) translateZ(5em);
}
.side-1b {
    width: 10em;
    height: 10em;
    line-height: 10em;
    transform: translateX(20em) translateY(20em) translateZ(5em);
}
.side-2a {
    width: 10em;
    height: 30em;
    line-height: 30em;
    transform: translateX(10em) rotateY(180deg) translateZ(5em);
}
.side-2b {
    width: 10em;
    height: 10em;
    line-height: 10em;
    transform: translateX(20em) rotateY(180deg) translateY(20em) translateZ(5em);
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
    transform: translateX(10em) rotateY(90deg) translateZ(5em);
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
    transform: translateX(20em) rotateY(90deg) translateY(20em) translateZ(5em);
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
    transform: translateX(10em) rotateY(-90deg) translateZ(5em);
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
    transform: translateX(10em) rotateX(90deg) translateZ(5em);
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
    transform: translateX(20em) translateY(20em) rotateX(90deg) translateZ(5em);
}
.plane-bottom {
    width: 20em;
    height: 10em;
    line-height: 10em;
    transform: translateX(10em) translateY(20em) rotateX(-90deg) translateZ(5em);
}
.shadow {
    width: 20em;
    height: 10em;
    transform: translateX(10em) translateY(20.5em) rotateX(-90deg)
        translateZ(5em);
    background-color: rgba(black, 0.5);
    border-radius: 10em;
    filter: blur(4em);
}
.grid-line {
    background-color: var(--bg-pre);
    // transform: rotateX(90deg) translateX(-6em) translateZ(-5em);
    g {
        stroke: var(--border-color);
    }
}
.pers-form {
    width: 40%;
    min-width: 16rem;
    z-index: 100;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-code-invert);
    box-shadow: var(--shadow-md);
    &__label {
        font-family: var(--font-family--hand);
        font-weight: var(--font-wight--bolder);
        font-size: var(--font-size-2xl);
        padding: 1rem 0;
        text-align: start;
        display: inline-block;
    }
    &__input {
        margin: 0;
        padding: 1rem 0;
        width: 100%;
    }
}
</style>
