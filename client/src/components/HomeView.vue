<template>
    <div> Parent Component</div>
  

    <v-name :msg="atr">
        <template #slot1>
            replacement for slot 1
        </template>
        <template #slot2="s">
            replacement for slot 2 --- {{ s.s }}
        </template>
    </v-name>
</template>
  

<script setup>
import VName from './VName.vue';

const atr = 'gun'


</script>