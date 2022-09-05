import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'

//import type { Lot } from "@/models/lot.model";

export type Lot = {
    id: Number,
    title: String,
    cost: Number
  };

export const useAuctionStore = defineStore({
  id: "auction",
  state: () => ({
    lots: useStorage('todos', [] as Lot[])
  }),
  getters: {
    count(): number {
      return this.lots.length;
    }
  },
  actions: {
    addNewLot(title: string, cost: number): boolean {
      if (!this.checkIfLotIsValid(title, cost)) {
        return false;
      }

      const lotExists = this.checkIfLotExists(title);

      if (lotExists === null) {
        this.lots.push({
          id: this.count + 1,
          title: title,
          cost: cost
        });
      } else {
        lotExists.cost = +lotExists.cost + cost;
      }
      this.lots.sort((a, b) => (a.cost > b.cost ? -1 : 1));
      return true;
    },
    removeLot(lot: Lot): void {
      const i = this.lots.findIndex(s => s.title === lot.title)
      if (i > -1) this.lots.splice(i, 1)
    },
    checkIfLotIsValid(title: string, cost: number): boolean {
      return (title !== '' && cost !== 0) ? true: false;
    },
    checkIfLotExists(title: string): Lot | null {
      return this.lots.find(elem => elem.title === title) ?? null;
    }
  },
});
