import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      currencyData: {},
      currencyCollection: [],
      currencyLeftValue: null,
      currencyRightValue: null,
      currencyNumber: 1,
      calculatedResult: 0
    }),
  actions: {
    async fetchCurrency () {
      const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
      try {
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error('Ошибка при загрузке данных')
        }
        let data = await response.json();
        //  сразу преобразуем, чтобы удобнее было пользоваться далее.
        // и разделим на две части, чтобы отделить общую информацию от массива валют
        this.currencyData = {...data}
        this.currencyCollection = [...Object.values(data.Valute)]
        delete this.currencyData.Valute;
      }
      catch (e: any) {
        console.log(e.message)
      }
    },

    revertValues() {
      [this.currencyLeftValue, this.currencyRightValue] = [this.currencyRightValue, this.currencyLeftValue];
    }
  },
  getters: {
    calculateCurrency(state) {
      if (state.currencyLeftValue && state.currencyRightValue) {
        state.calculatedResult = ((state.currencyLeftValue.Value / state.currencyRightValue.Value) * state.currencyNumber).toFixed(4)
      }
    }
  }
});
