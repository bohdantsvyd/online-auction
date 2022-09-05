<script setup lang="ts">
import AuctionAddForm from "@/components/AuctionAddForm.vue";
import AuctionGrid from "@/components/AuctionGrid.vue";
import Timer from "@/components/Timer.vue";
</script>

<template>
  <main>
    <v-row>
      <v-col cols="8">
        <AuctionGrid />
      </v-col>
      <v-col cols="2">
        <Timer />
      </v-col>
      <v-col cols="2">
        <AuctionAddForm />
      </v-col>
    </v-row>
  </main>
</template>
