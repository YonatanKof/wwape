<template>
    <g-link v-if="prefix.cool" :to="prefix.path">
        <h1>{{ prefix.title }}</h1>
        <h2>Date added is: {{ prefix.date_added }}</h2>
        <h3>ID is: {{ prefix.prodID }}</h3>
        <p>{{ prefix.description }}</p>
    </g-link>
</template>

<script>
export default {
    props: ["prefix"],
};
</script>
