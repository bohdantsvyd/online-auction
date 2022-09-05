<template>
    <form @submit.prevent="submit">
        <div class="form-group">
            <label>Title: </label>
            <input class="form-control" v-model="inputs.title" type="text"/>
        </div>
        <div class="form-group">
            <label>Cost: </label>
            <input class="form-control" v-model="inputs.cost" type="number"/><br>
        </div>
        <v-btn type="submit" variant="outlined">Add!</v-btn>
    </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useAuctionStore } from '@/stores/auctionLots'

export default defineComponent({
  setup() {
    const auctionLots = useAuctionStore()
    const inputs = reactive({ title: '', cost: 0 })
    const submit = () => {
      auctionLots.addNewLot(inputs.title, inputs.cost)
      inputs.title = ''
      inputs.cost = 0
    }
    return { inputs, submit }
  }
})
</script>