<template>
	<div>
		<g-link to="/" style="height:40px;">
			<IconBase icon-name="Back to homepage" width="40" height="40" viewBox="0 0 298 298">
				<KofIconRotating />
			</IconBase>
		</g-link>
	</div>
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
a {
	border-bottom: 0;
}
</style>
