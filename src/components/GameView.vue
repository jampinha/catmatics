<script lang="ts" setup>
defineOptions({
	name: 'GameView'
});
</script>

<template>
	<main class="game-view">
		<slot />
	</main>
</template>

<style>
.game-view {
	width: 640px;
	height: 400px;
}
</style>
