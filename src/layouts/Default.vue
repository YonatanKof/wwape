<template>
	<div id="app" class="wrapper">
		<header class="header">
			<div class="header__content">
				<div class="header__content__start">
					<Logo v-if="showLogo" />
				</div>
				<div class="header__content__end" v-if="showLinks">
					<!-- <g-link class="nav__link" to="/about/">About</g-link> -->
					<g-link class="nav__link" to="/posts/">Posts</g-link>
					<g-link class="nav__link" to="/designs/">Designs</g-link>
					<!-- <g-link class="nav__link" to="/reviews/">Reviews</g-link> -->
				</div>
			</div>
		</header>
		<transition name="fade" appear>
			<main class="main">
				<slot />
			</main>
		</transition>
		<footer class="footer">
			<p class="footer__links">
				<a href="//twitter.com/yonatankof" target="_blank" rel="nofollow noopener noreferrer">Twitter</a>
				<a href="//github.com/yonatankof" target="_blank" rel="nofollow noopener noreferrer">GitHub</a>
				<a href="//linkedin.com/in/yonatankof/" target="_blank" rel="nofollow noopener noreferrer">Linkedin</a>
				<a href="//dribbble.com/yonatan_kof" target="_blank" rel="nofollow noopener noreferrer">Dribbble</a>
				<ToggleTheme />
			</p>
			<span class="footer__copyright">
				Copyright © {{ $static.metadata.siteName }}・{{ new Date().getFullYear() }}
			</span>
		</footer>
	</div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
	props: {
		showLogo: { default: true },
		showLinks: { default: true },
	},
	components: {
		Logo,
		ToggleTheme,
	},
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import "../assets/style/_layout.scss";
@import "../assets/fonts/Inter/inter.css";
@import "../assets/fonts/Inknut-Antiqua/InknutAntiqua.css";
@import "../assets/fonts/DM_Mono/DM_Mono.css";

.wrapper {
	display: grid;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
	min-height: -webkit-fill-available; // mobile viewport hidden footer fix
	&::before {
		content: "";
		height: calc(var(--space-7xl) * 8);
		background-image: linear-gradient(to bottom, var(--bg-color-HL) var(--header-height), var(--bg-color));
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}
}

.header {
	z-index: 1000;
	@include main-padding;
	&__content {
		max-width: var(--content-width-lg);
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: var(--header-height);
		margin: 0 auto;
		&__start {
			a {
				margin: 0;
				margin-inline-end: var(--space-md);
			}
		}
		&__end {
			.active--exact {
				border-bottom: 1px solid var(--link-color);
			}
			a {
				margin: 0;
				margin-inline-start: var(--space-md);
			}
		}
	}
}

.main {
	@include main-padding;
	margin: 0 auto;
	z-index: 100;
}

.footer {
	z-index: 110;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: var(--spacem-6xl);
	@include main-padding;
	padding-bottom: calc(max(var(--space-xl), env(safe-area-inset-bottom)));
	text-align: center;
	min-height: var(--header-height);
	@include mQ-max($display-size-sm) {
		font-size: 0.9em;
	}
	&__links {
		display: flex;
		align-items: center;
		a {
			margin: 0;
			margin-inline-end: var(--spacem-sm);
		}
	}
	> span {
		font-size: 90%;
		margin-top: var(--spacem-xs) 0;
	}
}

.fade-enter-active {
	transition: opacity 0.35s;
}

.fade-enter {
	opacity: 0;
}
</style>
