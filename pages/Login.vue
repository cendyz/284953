<template>
	<main
		class="mx-[2.4rem] lg:flex lg:items-center lg:justify-center max-h-full lg:gap-x-[7rem] lg:m-[0rem] xl:gap-x-[15rem] 2xl:gap-x-[25rem] lg:h-[100vh]">
		<LoginHeader />
		<section>
			<form
				class="bg-white rounded-xl p-[2rem] mx-auto mt-[6rem] max-w-[50rem] shadow-lg lg:w-[40rem] lg:m-0 xl:w-[50rem]"
				@submit.prevent="">
				<p class="text-[3.2rem] font-w700 mb-[3.2rem]">{{ $t('login') }}</p>
				<label for="email" :class="labelStyles">Email</label>
				<input type="email" id="email" :class="inputStyles" class="mb-[.3rem]" v-model="loginData.email" />
				<p class="text-[1.1rem] italic" v-show="errorEmail">wrong email</p>
				<label for="password" :class="labelStyles">Password</label>
				<div
					:class="[inputStyles, isShowedPasswordIcon ? 'outlineParrent' : '']"
					class="focusParrent flex items-center border-[2px] mb-[.3rem]"
					@focusin="isShowedPasswordIcon = true"
					@focusout="isShowedPasswordIcon = false">
					<input
						:type="isShowedPasswordWords ? 'text' : 'password'"
						id="password"
						class="w-full focusInput outline-none"
						v-model="loginData.pass" />
					<button type="button" @click="isShowedPasswordWords = !isShowedPasswordWords">
						<img
							:src="isShowedPasswordWords ? openedEye : closedEye"
							alt="hided password "
							class="w-[2rem]"
							v-show="loginData.pass.length !== 0" />
					</button>
				</div>
				<p class="text-[1.1rem] italic text-[#cd4432]" v-show="errorPass">wrong email</p>
				<button
					type="submit"
					class="p-[.5rem] font-w700 bg-[#1A2E45] text-white w-full py-[1.4rem] rounded-xl mt-[3.5rem] mb-[3.2rem]">
					{{ $t('login') }}
				</button>
				<p class="text-[#696868] text-[1.4rem] text-center">
					Need to create an account?
					<NuxtLink to="/signUp" class="underline text-[#111827] font-w700">Sign Up</NuxtLink>
				</p>
			</form>
		</section>
		<div v-if="store.isOpenLang" class="absolute top-0 left-0 w-full h-full bg-black/10 z-[50]"></div>
	</main>
</template>

<script setup lang="ts">
import useFinanceStore from '~/store/financeStore'
import openedEye from 'assets/images/opened_eye.svg'
import closedEye from 'assets/images/closed_eye.svg'
import loginPhoto from 'assets/images/login_signup.svg'
import logo from 'assets/images/atm-card.png'
const { t } = useI18n()

definePageMeta({
	layout: 'login-nav',
})

const store = useFinanceStore()

const isShowedPasswordIcon = ref<boolean>(false)
const isShowedPasswordWords = ref<boolean>(false)
const errorPass = ref<string>('')
const errorEmail = ref<string>('')

const loginData = reactive({
	email: '',
	pass: '',
})

const inputStyles: string = 'block border border-color-[#CBD5E1] mt-[.5rem] p-[1rem] w-full rounded-xl'
const labelStyles: string = 'text-[1.2rem] font-w700 text-[#696868]'
</script>

<style scoped lang="scss">
.outlineParrent {
	outline: 2px solid royalblue;
}

.focusParrent:has(.focusInput:focus) {
	outline: 2px solid royalblue;
}
</style>
