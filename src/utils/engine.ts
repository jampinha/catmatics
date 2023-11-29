import { randomInt, evaluate } from 'mathjs';

const get_number = (len: number) => {
	const matrix: any = {
		1: [0, 9],
		2: [10, 99],
		3: [100, 999],
		4: [0, 9999]
	};

	const index = len;
	const [min, max] = matrix[index];
	return randomInt(min, max);
};

const get_operator = (family: number) => {
	const familyOne = ['+', '-'];
	const familyTwo = ['*', '/'];
	const sorted = randomInt(0, 100);
	const index = sorted >= 50 ? 1 : 0;

	return family === 1 ? familyOne[index] : familyTwo[index];
};

const eval_expression = (exp: string) => {
  return evaluate(exp);
}

export { get_number, get_operator, eval_expression };
