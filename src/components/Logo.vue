<template>
	<g-link to="/" class="this-link unlink">
		<IconBase icon-name="Back to homepage" width="40" height="40" viewBox="0 0 298 298">
			<KofIconRotating />
		</IconBase>
	</g-link>
</template>

<script>
import IconBase from "~/components/IconBase";
import KofIconRotating from "~/components/icons/KofIconRotating";

export default {
	components: {
		IconBase,
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
