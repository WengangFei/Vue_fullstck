<template>
    <div>Child Component</div>
    <div>{{ msg }}</div>

    <slot name="slot1">Child Slot1</slot>

    <slot name="slot2" :s="childSlot">Child Slot2</slot>
    
    
</template>

<script setup>
import { defineProps } from 'vue';
const childSlot = 'childSlot';

defineProps(['msg','ti'])
</script>

