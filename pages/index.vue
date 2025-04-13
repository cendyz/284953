<template>
	<header></header>
</template>

<script setup lang="ts">
import useFinanceStore from '~/store/financeStore'

const store = useFinanceStore()

</script>

<style lang="scss">
@use '../assets/sass/reset.scss';

body {
	background-color: #f2f4f8;
}
</style>
