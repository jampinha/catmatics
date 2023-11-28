<template>
	<div class="board-footer">
		<div class="best">
			<span>Best</span>
			<br>
			<span>{{	bestCount }}</span>
		</div>
		<div class="points">
			<span>Score</span>
			<br>
			<span>{{	scoreCount }}</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const bestCount = ref<number>(0);
const scoreCount = ref<number>(0);
</script>

<style>
.board-footer {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 70px;
	padding: 1rem;
	color: white;
}

.board-footer > .best {
	text-align: left;
}

.board-footer > .points {
	text-align: right;
}
</style>
