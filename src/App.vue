<template>
  <div class="mainPage">
    <div class="menu">
      <RouterLink to="/">hello world</RouterLink>
      <RouterLink to="/variable">variable</RouterLink>
      <RouterLink to="/type">type</RouterLink>
    </div>
    <div class="vertical-line"></div>
    <RouterView class="content" />
  </div>
</template>
<style scoped>
.mainPage {
  display: flex;
}
.content{
  flex-grow: 1;
}
.menu {
  display: flex;
  flex-direction: column;
}

.vertical-line {
  width: 1px;
  background-color: red;
  margin: 0 5px;
}
</style>
