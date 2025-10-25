export const sleep = (ms: number = 1): Promise<void> => {
	return new Promise((_) => setTimeout(_, ms));
};
