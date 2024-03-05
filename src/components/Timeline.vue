<script setup lang="ts">
    //import { ref } from "vue"
    import {TimelinePost, today, thisWeek, thisMonth } from "../posts"
    import { DateTime } from "luxon" 
    import { ref, computed } from "vue"
    import TimelineItem from './TimelineItem.vue'

    const periods = ["Aujourd'hui", "Cette semaine", "Ce mois"] as const
    type Period = typeof periods[number]

    let selectedPeriod = ref("Aujourd'hui")

    const posts = computed<TimelinePost[]>(() => {
    return [today, thisWeek, thisMonth]
    .map(post => {
        return {
            ...post,
            created: DateTime.fromISO(post.created)
        }
    })
    .filter(post => {
        if (selectedPeriod.value === "Aujourd'hui") {
            return post.created >= DateTime.now().minus({ day: 1 })
        }
        if (selectedPeriod.value === "Cette semaine") {
            return post.created >= DateTime.now().minus({ week: 1 })
        }

        return post
    })
})  

    function selectPeriod(period: Period) {
        selectedPeriod.value = period
        console.log(period)
    }
</script>

<template>
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary"
            v-for="period of periods" 
                v-bind:key="period" 
                v-on:click="selectPeriod(period)" 
                v-bind:class="{ 'btn-success': period === selectedPeriod}"
        >
            {{ period }}
        </button>
    </div>
    <h2>{{ selectedPeriod }}</h2>
        <TimelineItem v-for="post of posts" :key="post.id" :post="post" />
</template>

<style scoped>

</style>