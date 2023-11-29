<template>
	<div class="game-board">
		<BoardHeader></BoardHeader>
		<BoardScene></BoardScene>
		<BoardFooter></BoardFooter>
	</div>
</template>

<script lang="ts" setup>
import BoardHeader from '@/components/BoardHeader.vue';
import BoardScene from '@/components/BoardScene.vue';
import BoardFooter from '@/components/BoardFooter.vue';
</script>

<style>
.game-board {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	width: 640px;
	height: 400px;
	background-color: #6b6b6b;
	background-image: url('@/assets/cat.png');
	border: 1px solid #fff;
}

.game-board > .board-header {
	align-self: flex-start;
}

.game-board > .board-footer {
	align-self: flex-end;
}
</style>
