<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: ["id", "title", "cost", "num"],
})
</script>

<template>
    <v-row class="element">
        <v-col cols="1"><strong>{{ num }}</strong></v-col>
        <v-col cols="8"><strong>{{ title }}</strong></v-col>
        <v-col cols="3"><strong>{{ cost }}</strong></v-col>
    </v-row>
</template>

<style>
    .v-row.element{
        background-color: rgba(255, 255, 255, .02);
        margin-top: 1rem;
    }
</style>