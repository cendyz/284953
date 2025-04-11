<template>
	<nav
		ref="navRef"
		class="p-[2.4rem] bg-primary-blue text-white flex justify-between items-center niceShadow sm:px-[3rem] md:px-[4rem] lg:hidden">
		<img :src="logo" alt="logo cards" class="w-[4rem]" />
		<div class="flex items-center gap-x-[1rem]">
			<img :src="langsData[actualIndex].img" alt="flag" />
			<p class="uppercase font-w700">{{ langsData[actualIndex].lang }}</p>
			<button type="button" aria-label="change language" @click="store.isOpenLang = !store.isOpenLang">
				<img :src="arrow" alt="arrow down" class="w-[3.5rem] invert" />
			</button>
		</div>
		<Transition>
			<div
				v-if="store.isOpenLang"
				class="absolute bg-white w-[calc(100%-4.8rem)] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] p-[2.4rem] rounded-lg text-black z-[100] max-w-[40rem]">
				<div class="flex items-center justify-between mb-[1rem]">
					<p class="text-[2rem]">{{ $t('choose_language') }}</p>
					<button type="button" aria-label="close change language options" @click="store.isOpenLang = false">
						<img :src="x" alt="x icon" />
					</button>
				</div>
				<div class="grid">
					<div
						tabindex="0"
						role="button"
						@click="changeLanguage(index)"
						class="flex items-center justify-between py-[1.5rem] px-[.5rem] rounded-lg"
						:class="actualIndex === index ? 'bg-gray-100/35' : ''"
						v-for="(item, index) in langsData"
						:key="index">
						<div class="flex items-center gap-x-[1rem]">
							<img :src="item.img" alt="flag" />
							<p>{{ item.country }}</p>
						</div>
						<img :src="success" alt="selected language" class="filt w-[2.5rem]" v-if="index === actualIndex" />
					</div>
				</div>
			</div>
		</Transition>
		<!-- <p>{{ locale.name }}</p> -->
	</nav>
</template>

<script setup lang="ts">
import useFinanceStore from '~/store/financeStore'
import logo from 'assets/images/atm-card.png'
import arrow from 'assets/images/arrow.svg'
import poland from 'assets/images/poland.svg'
import japan from 'assets/images/japan.svg'
import usa from 'assets/images/usa.svg'
import success from 'assets/images/success.svg'
import x from 'assets/images/x.svg'

const { t, locale, setLocale } = useI18n()

interface Langs {
	img: string
	country: string
	lang: string
}

const store = useFinanceStore()

const navRef = ref<HTMLElement | null>(null)

const actualIndex = ref<number>(0)

const changeLanguage = (i: number): void => {
	actualIndex.value = i
	store.isOpenLang = false
	setLocale(langsData.value[i].lang as 'pl' | 'ja' | 'en')
}

const langsData = ref<Langs[]>([
	{
		img: poland,
		country: 'Polski',
		lang: 'pl',
	},
	{
		img: usa,
		country: 'English',
		lang: 'en',
	},
	{
		img: japan,
		country: '日本語',
		lang: 'ja',
	},
])

const handleClickOutside = (e: Event): void => {
	if (navRef.value && !navRef.value.contains(e.target as HTMLElement)) {
		store.isOpenLang = false
	}
}

watch(
	() => store.isOpenLang,
	newValue => {
		if (newValue) {
			document.addEventListener('click', handleClickOutside)
		} else {
			document.removeEventListener('click', handleClickOutside)
		}
	}
)
</script>

<style scoped lang="scss">
.niceShadow {
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.filt {
	filter: invert(29%) sepia(53%) saturate(1468%) hue-rotate(118deg) brightness(93%) contrast(89%);
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.15s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
