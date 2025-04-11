import { defineStore } from 'pinia'

const useFinanceStore = defineStore('finance-store', {
	state: () => ({
		isOpenLang: false,
		lang: 'pl',
	}),
	actions: {},
})

export default useFinanceStore
