<template>
	<Pager firstLabel="⇐" prevLabel="←" nextLabel="→" lastLabel="⇒" class="pagination" :info="paginationInfo" />
	<!-- See more Pager options here -> https://gridsome.org/docs/pagination/ -->
</template>

<script>
import { Pager } from "gridsome";

export default {
	components: {
		Pager,
	},
	props: ["paginationInfo"],
};
</script>

<style lang="scss">
.pagination {
	text-align: center;
	margin-block-start: var(--space-2xl);
	a {
		font-size: var(--font-size-xl);
		display: inline-flex;
		margin: 0;
		margin-inline-end: 0.625rem;
		width: var(--space-4xl);
		height: var(--space-4xl);
		justify-content: center;
		align-items: center;
		text-decoration: none;
		background-color: var(--bg-primary);
		border: 1px solid var(--bg-primary);
		border-radius: 3px;
		&:last-child {
			margin-inline-end: 0;
		}
		&:hover {
			border: 1px solid var(--bg-primary-HL);
			box-shadow: var(--shadow-md);
		}
	}
	.active--exact {
		border: 1px solid var(--bg-primary-HL);
		box-shadow: var(--shadow-sm);
		// background-color: var(--bg-primary-HL);
	}
}
</style>
