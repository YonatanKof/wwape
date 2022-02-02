<template>
	<g-link to="/" class="this-link unlink">
		<KofIconRotating />
	</g-link>
</template>

<script>
import KofIconRotating from "~/components/icons/KofIconRotating";

export default {
	components: {
		KofIconRotating,
	},
};
</script>

<style lang="scss" scoped>
.this-link {
	display: inline-block;
	width: var(--space-3xl);
	height: var(--space-3xl);
}
</style>
