<script setup lang="ts">
import { TimelinePost } from '../posts'
    defineProps<{
        post: TimelinePost
    }>()
</script>
<template>
    <li>
        <span>{{ post.title }}</span>&nbsp;|&nbsp;
        <span>{{ post.created.toFormat("d MMM") }}</span>
    </li>
</template>
<style></style>