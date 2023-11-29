<template>
	<div class="board-scene">
		<div class="question">1 + 2 + 3</div>
		<div class="buttons">
			<div class="bone">3</div>
			<div class="bone">10</div>
			<div class="bone">6</div>
		</div>
	</div>
</template>

<script setup lang="ts">
</script>

<style>
.board-scene {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 260px;
	font-size: 28px;
}

.question {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-weight: bold;
	width: 250px;
	height: 50px;
	margin: 0 auto;
}

.buttons {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 500px;
	height: 70px;
	margin: 0 auto;
}

.bone {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 150px;
	height: 66px;
	border: none;
	background: transparent;
	background-image: url('@/assets/bone.png');
	font-weight: bold;
	font-size: 2rem;
}
</style>
