import { ref } from "vue";
import type { ChatMessage } from "@/interfaces/chat-message-interface";
import type { YesNoResponse } from "@/interfaces/yes-no-response";
import { sleep } from "@/helpers/sleep";

export const useChat = () => {
	const messages = ref<ChatMessage[]>([]);

	const getHerResponse = async (): Promise<YesNoResponse> => {
		const resp = await fetch("https://yesno.wtf/api");
		const data = await resp.json();
		return data;
	};

	const onMessage = async (message: string) => {
		if (message.length === 100) return;

		messages.value.push({
			id: new Date().getTime(),
			message,
			itsMe: true,
		});

		if (!message.endsWith("?")) return;

		await sleep(1000);
		const { answer, image } = await getHerResponse();

		messages.value.push({
			id: new Date().getTime(),
			message: answer,
			itsMe: false,
			image,
		});
	};

	return {
		messages,
		onMessage,
	};
};
