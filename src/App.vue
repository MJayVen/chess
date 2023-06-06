<script setup lang="ts">
import { ref } from 'vue';
// import Board from './models/Board';
import Position from './models/Position';
import Rook from './models/Rook';

const board = ref(Array.from({ length: 8 }, (_, row) =>
                        Array.from({ length: 8 }, (_, col) => new Position(col, row, null))
                      ));

board.value[3][3].heldPiece = new Rook([3,3], 1, true)

function highlightValidMoves(position: Position) {
  const curPiece = position.heldPiece;
  
  if (!curPiece) return;

  const validMoves = curPiece.getValidMoves(board.value as Position[][]);
  
  validMoves.forEach((coords) => {
    board.value[coords[1]][coords[0]].isHighlighted = true;
  });

}

</script>

<template>
  <main class="pt-8 text-center dark:bg-gray-800 min-h-screen dark:text-white">
    <div class="flex flex-col-reverse items-center mb-8">
        <div
          v-for="(row) in board"
          class="flex">
            <div
              v-for="(position) in row"
              :key="position.getPosition()"
              :id="position.getPosition()"
              @click="highlightValidMoves(position as Position)"
              class="flex relative w-36 h-36 cursor-pointer"
              :class="`${(position.getCoords().reduce((sum, a) => sum + a, 0)) % 2 == 0 
                            ? 'bg-black' : 'bg-white'}`">
                <img v-if="position.heldPiece" :src="position.heldPiece.pathToImage" class="z-10">
                <div 
                  v-if="position.isHighlighted"
                  class="absolute inset-0 bg-yellow-200 opacity-50"></div>
            </div>
        </div>
    </div>
  </main>
</template>

<style scoped>

</style>