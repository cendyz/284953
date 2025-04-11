<template>
	<h1>ww</h1>
</template>

<script setup lang="ts">
import useFinanceStore from '~/store/financeStore'

const store = useFinanceStore()

useHead({
	htmlAttrs: {
		lang: store.lang,
	},
})
</script>

<style lang="scss">
@use '../assets/sass/reset.scss';

body {
	background-color: #f2f4f8;
}
</style>
