<script setup lang="ts">
import Board from './models/Board';

const board = Board.getInstance();
let boardState = board.getBoardState();
let curPiece = board.pieceAtPosition(3,5);

  
</script>

<template>
<h1 @click="console.log(curPiece?.getValidMoves())">Hi people, this'll become a chess board soon!</h1>
</template>

<style scoped>

</style>
