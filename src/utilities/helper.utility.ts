export const snakeCase = (str: string): string => {
	return str.replace(/\s+/g, '_').toLowerCase();
};
export const randomId = (): string => {
	return Math.random().toString(36).substring(2);
}