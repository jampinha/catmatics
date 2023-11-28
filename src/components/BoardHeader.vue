<template>
	<div class="board-header">
		<div class="level">Normal</div>
		<div class="stage">Stage 1</div>
		<div class="health">
			<div class="heart red"></div>
			<div class="heart red"></div>
			<div class="heart red"></div>
			<div class="heart red"></div>
			<div class="heart red"></div>
		</div>
	</div>
</template>

<script></script>

<style>
.board-header {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 70px;
	padding: 1rem;
	color: #fff;
}

.board-header > .level {
	padding: 0 0.2rem;
	width: 160px;
}

.board-header > .health {
	display: flex;
	gap: 7px;
	width: 160px;
}

.health > .heart {
	width: 26px;
	height: 24px;
}

.health > .heart.red { background-image: url('@/assets/heart.png'); }
.health > .heart.grey { background-image: url('@/assets/grey-heart.png'); }
</style>
