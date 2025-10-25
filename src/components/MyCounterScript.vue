<template>
	<section>
		<h3>Counter: {{ counter }}</h3>
		<h3>Square: {{ squareCounter }}</h3>

		<div>
			<button @click="decrement">-1</button>
			<button @click="increment">+1</button>
		</div>
	</section>
</template>

<script lang="ts">
	import { useCounter } from "@/composables/useCounter";
	import { defineComponent } from "vue";

	export default defineComponent({
		props: {
			value: {
				type: Number,
				required: true,
			},
		},
		setup(props) {
			const { counter, squareCounter, increment, decrement } = useCounter(props.value);

			return { counter, squareCounter, increment, decrement };
		},
	});
</script>

<style scoped>
	h1 {
		color: blueviolet;
	}
</style>
