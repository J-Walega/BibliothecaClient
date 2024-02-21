<template>
	<v-alert color="error" icon="$error" title="Error">{{ message }} </v-alert>
</template>

<script setup lang="ts">
import { inject } from "vue";

const message = inject("error");
</script>
