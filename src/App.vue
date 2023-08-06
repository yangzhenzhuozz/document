<template>
  <div class="mainPage">
    <div class="menu">
      <RouterLink to="/">hello world</RouterLink>
      <RouterLink to="/variable">variable</RouterLink>
      <RouterLink to="/type">type</RouterLink>
      <RouterLink to="/todo">todo</RouterLink>
    </div>
    <div class="vertical-line"></div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
.mainPage {
  display: flex;
}
.content {
  flex-grow: 1;
}
.menu {
  display: flex;
  flex-direction: column;
}

</style>
