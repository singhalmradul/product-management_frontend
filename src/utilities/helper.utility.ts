export const snakeCase = (str: string): string => {
	return str.replace(/\s+/g, '_').toLowerCase();
};
