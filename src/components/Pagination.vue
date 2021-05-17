<template>
	<Pager firstLabel="⇐" prevLabel="←" nextLabel="→" lastLabel="⇒" class="pagination" linkClass="page-it" :info="paginationInfo" />
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
@import "../assets/style/_utils.scss";

.pagination {
	text-align: center;
	margin-block-start: var(--space-2xl);
	.page-it {
		display: inline-flex;
		margin: 0;
		margin-inline-end: var(--space-xs);
		width: var(--space-4xl);
		height: var(--space-4xl);
		justify-content: center;
		align-items: center;
		text-decoration: none;
		background-color: var(--bg-primary);
		border-bottom: unset;
		@include inline(var(--bg-primary));
		border-radius: var(--radius-sm);
		&:last-child {
			margin-inline-end: 0;
		}
		&:hover {
			border-bottom: unset;
			@include inline(var(--bg-primary-HL));
			box-shadow: var(--shadow-md);
		}
	}
	.active--exact {
		@include inline(var(--bg-primary-HL));
		box-shadow: var(--shadow-sm);
		&:hover {
			pointer-events: none;
		}
	}
}
</style>
