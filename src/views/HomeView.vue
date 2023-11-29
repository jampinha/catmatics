<script setup lang="ts">
import { ref } from 'vue';
import { eval_expression, get_number, get_operator } from '@/utils/engine';

const question = ref<string>();
const response = ref<string>();

function generate() {
	const exp = `${get_number(1)} ${get_operator(1)} ${get_number(1)}`;
	question.value = exp;
	response.value = eval_expression(exp);
}
</script>

<template>
  <main class="game-view-home">
		<div class="expression">{{ question }} = {{ response }}</div>
		<div class="button">
			<button @click="generate">Generate</button>
		</div>
  </main>
</template>

<style>
.game-view-home {
	display: flex;
	flex-wrap: wrap;
	width: 640px;
	height: 400px;
	padding: 1em;
	background-color: #adadad;
}

.game-view-home > .expression {
	width: 100%;
	align-self: flex-start;
}

.game-view-home > .buttons {
	width: 100%;
	align-self: flex-end;
}
</style>