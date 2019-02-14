<template>
  <div id="listPage">
    List Page
    <div class="todo-item" v-for="item in TODOS">{{ item.name }}</div>
  </div>
</template>

<script src="./list-page.component.js"></script>
<style src="./list-page.component.css"></style>
