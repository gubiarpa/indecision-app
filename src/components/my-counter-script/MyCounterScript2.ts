import { computed, defineComponent, ref } from "vue";

export default defineComponent({
	props: {
		value: {
			type: Number,
			required: true,
		},
	},
	setup(props) {
		const counter = ref(props.value);
		const squareCounter = computed(() => counter.value ** 2);

		function increment(): void {
			counter.value++;
		}

		function decrement(): void {
			counter.value--;
		}

		return { counter, squareCounter, increment, decrement };
	},
});
