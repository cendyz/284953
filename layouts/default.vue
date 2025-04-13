<template>
	<nav
		class="p-[2.4rem] w-full bg-primary-blue text-white flex justify-between items-center niceShadow sm:px-[3rem] md:px-[4rem]">
		<button type="button">
			<img :src="logo" alt="wallet" class="w-[3.5rem]" />
		</button>
		<button type="button">
			<img :src="burgir" alt="menu icon" class="invert" />
		</button>
	</nav>
</template>

<script setup lang="ts">
import logo from 'assets/images/atm-card.png'
import burgir from 'assets/images/burger.svg'
</script>

<style scoped lang="scss">
.niceShadow {
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>
