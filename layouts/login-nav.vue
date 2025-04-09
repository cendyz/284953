<template>
	<nav class="p-[2.4rem] bg-primary-blue text-white flex justify-between items-center niceShadow">
		<img :src="logo" alt="logo cards" class="w-[4rem]" />
		<div class="flex items-center gap-x-[1rem]">
			<img :src="poland" alt="flag" />
			<p class="uppercase font-w700">pl</p>
			<button type="button" aria-label="change language">
				<img :src="arrow" alt="arrow down" class="w-[3.5rem] invert" />
			</button>
		</div>
		<div
			class="absolute bg-white w-[calc(100%-4.8rem)] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] p-[2.4rem] rounded-lg text-black">
			<p class="text-[2rem] mb-[2rem] pb-[1rem] border-b-[2px]">Wybierz język:</p>
			<div class="grid">
				<div
					class="flex items-center justify-between py-[1rem] px-[.5rem] rounded-lg border-b"
					v-for="(item, index) in langsData"
					:key="index">
					<div class="flex items-center gap-x-[1rem]">
						<img :src="item.img" alt="flag" />
						<p>{{ item.country }}</p>
					</div>
					<img :src="success" alt="selected language" class="filt w-[2.5rem]" />
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import logo from 'assets/images/atm-card.png'
import arrow from 'assets/images/arrow.svg'
import poland from 'assets/images/poland.svg'
import japan from 'assets/images/japan.svg'
import usa from 'assets/images/usa.svg'
import success from 'assets/images/success.svg'

interface Langs {
	img: string
	country: string
}

const langsData = ref<Langs[]>([
	{
		img: poland,
		country: 'Polski',
	},
	{
		img: usa,
		country: 'English',
	},
	{
		img: japan,
		country: '日本語',
	},
])
</script>

<style scoped lang="scss">
.niceShadow {
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.filt {
	filter: invert(29%) sepia(53%) saturate(1468%) hue-rotate(118deg) brightness(93%) contrast(89%);
}
</style>
