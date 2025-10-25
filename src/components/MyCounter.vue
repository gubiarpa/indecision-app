<template>
	<section>
		<h3>Counter: {{ counter }}</h3>
		<h3>Square: {{ squareCounter }}</h3>

		<div>
			<button class="btn" @click="decrement">-1</button>
			<button class="btn" @click="increment">+1</button>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useCounter } from "@/composables/useCounter";

	interface Props {
		value: number;
	}
	const { value } = defineProps<Props>(); // props come from the parent

	const { counter, squareCounter, increment, decrement } = useCounter(value);
</script>

<style scoped>
	@reference "tailwindcss";
	.btn {
		@apply p-5 bg-blue-900 rounded mr-2 hover:bg-blue-600;
	}
</style>
