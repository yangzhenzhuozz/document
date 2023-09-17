<template>
  <div class="mainPage">
    <div class="menu">
      <RouterLink to="/">hello world</RouterLink>
      <RouterLink to="/variable">变量</RouterLink>
      <RouterLink to="/type">类型</RouterLink>
      <RouterLink to="/operator">操作符</RouterLink>
      <RouterLink to="/namespace">命名空间</RouterLink>
      <RouterLink to="/magicclass">魔法类</RouterLink>
      <RouterLink to="/typecast">类型转换</RouterLink>
      <RouterLink to="/closure">闭包</RouterLink>
      <RouterLink to="/memberfunctionextensionmethod">扩展和成员函数</RouterLink>
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
