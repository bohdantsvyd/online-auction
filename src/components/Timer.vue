<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: 'timer',
	data() {
		return {
            time: 600,
            isActive: false,
            intervalId: 0,
            timeStep: 60,
            timeInitial: 600
		}
	},
    computed: {
        timeFormatted() {
            return new Date(this.time * 1000).toISOString().slice(14, 19);
        }
    },
	methods: {
        start() {
            if ( this.isActive === false ) {
                this.isActive = true;
                this.intervalId = setInterval(() => {
                    this.time -= 1;

                    if (this.time == 0) {
                        this.makeTimerInactive();
                    }

                    }, 1000);
            }
        },
        stop() {
            this.makeTimerInactive();
        },
        reset() {
            this.time = this.timeInitial;
            this.makeTimerInactive();
        },
        plus() {
            this.time += this.timeStep;
        },
        minus() {
            if (this.time >= this.timeStep) {
                this.time -= this.timeStep;
            }
        },
        makeTimerInactive() {
            this.isActive = false;
            clearInterval(this.intervalId);
        }
	},
    watch: {
        time(newTime) {
            if (newTime === 0) {
                this.makeTimerInactive();
            }
        }
    }
});
</script>

<template>
    <v-row>
        <v-col cols="8"><span class="timer-time">{{ timeFormatted }}</span></v-col>
        <v-col cols="4">
            <v-btn @click="plus()" size="small" variant="outlined" class="timer-button-v-element">+</v-btn>
            <v-btn @click="minus()" size="small" variant="outlined" class="timer-button-v-element">-</v-btn>
        </v-col>
    </v-row>
    <div class="">
        <v-btn @click="start()" size="x-small" variant="outlined" class="timer-button-element">Start</v-btn>
        <v-btn @click="stop()" size="x-small" variant="outlined" class="timer-button-element">Stop</v-btn>
        <v-btn @click="reset()" size="x-small" variant="outlined" class="timer-button-element">Reset</v-btn>
    </div>
</template>


<style>
    div.timer-button-container{
        margin-top: 1rem;
    }
    button.timer-button-element{
        margin-right: 5px;
    }
    button.timer-button-v-element{
        margin-bottom: 5px;
    }
    span.timer-time{
        font-size: 4rem;
    }
</style>