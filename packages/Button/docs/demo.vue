<template>
    <div>
        <d-button @click="onClick('11')">1111</d-button>
        <d-button @click="onClick('22')">2222</d-button>
        <d-button @click="onClick('33')">3333</d-button>
    </div>
</template>
<script setup>
const onClick = num => {
    console.log(num);
};
</script>
