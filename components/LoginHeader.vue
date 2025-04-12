<template>
	<header class="hidden lg:block w-fit relative">
		<img :src="loginPhoto" alt="a guy chasing money" class="w-[43rem] rounded-xl" />
		<img :src="logo" alt="wallet card" class="w-[4rem] absolute top-[2.4rem] left-[2.4rem]" />
		<div class="absolute bottom-0 left-0 text-white p-[2.4rem]">
			<h1 class="font-w700 text-[2.7rem] leading-[1.1] mb-[2rem]">Keep track of your money and save for your future</h1>
			<p class="text-[1.2rem]">
				Personal finance app puts you in Control of your spending. Track transactions, set budgets, and add to savings
				pots easily.
			</p>
		</div>
	</header>
</template>

<script setup lang="ts">
import loginPhoto from 'assets/images/login_signup.svg'
import logo from 'assets/images/atm-card.png'
</script>
