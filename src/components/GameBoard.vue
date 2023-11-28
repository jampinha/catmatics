<script lang="ts" setup>
defineOptions({
	name: 'GameBoard'
});
</script>

<template>
	<div class="game-board"></div>
</template>

<style>
.game-board {
	width: 640px;
	height: 400px;
	background-color: #6b6b6b;
	background-image: url('@/assets/cat.png');
	border: 1px solid #fff;
}
</style>
