<template>
	<div class="board-header">
		<div class="level">Normal</div>
		<div class="stage">Stage 1</div>
		<div class="health">
			<div v-for="(h, i) in hearts" :class="['heart', h]" :key="i"></div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const val = ref(5);
const hearts = ref(['red', 'red', 'red', 'red', 'red']);

watch(val, (v) => {
	if (v < 0 || v > 4) return;
	hearts.value[v] = 'grey';
});
</script>

<style>
.board-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 58px;
	padding: 1rem;
	color: #fff;
}

.board-header > .level {
	padding: 0 0.2rem;
	width: 160px;
}

.board-header > .health {
	display: flex;
	justify-content: space-between;
	width: 160px;
	flex-direction: row-reverse;
}

.health > .heart {
	width: 26px;
	height: 24px;
}

.health > .heart.red {
	background-image: url('@/assets/heart.png');
}
.health > .heart.grey {
	background-image: url('@/assets/grey_heart.png');
}
</style>
