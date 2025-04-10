import { defineStore } from 'pinia'

const useFinanceStore = defineStore('finance-store', {
	state: () => ({
		isOpenLang: false,
	}),
	actions: {},
})

export default useFinanceStore
