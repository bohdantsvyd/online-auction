<template>
    <v-container>
        <AuctionElement 
        v-for="(item, index) in auction.lots" 
        :key="item.id"
        :id="item.id"
        :num="index+1"
        :title="item.title"
        :cost="item.cost"/>
    </v-container>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useAuctionStore } from '@/stores/auctionLots'
export default defineComponent({
    setup() {
        const auction = useAuctionStore()
        return { auction }
    }
})
</script>