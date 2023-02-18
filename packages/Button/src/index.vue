<template>
    <button class="d-button" @click="$emit('click', $event)">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
defineEmits(['click']);
</script>

<style scoped>
.d-button {
    border: 1px solid #eee;
}
</style>
