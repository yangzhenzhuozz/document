<template>
  <p>
    ty的switch和c系列语言略有不同,会自动在每个case分支后面自带break(需要注意的是这个break不能手动添加)
  </p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var</span> <span class="variable">a</span>:<span
          class="key-word"
          >int</span
        >;
      </div>
      <div>
        <span class="key-word">switch</span>(<span class="variable">obj</span>){
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">case</span>
        <span class="variable"> obj1</span>:a=1;
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">case</span>
        <span class="variable"> obj2</span>:{
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="variable">a</span>++;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="variable">a</span>++;</div>
      <div>&nbsp;&nbsp;}</div>
      <div>}</div>
    </code>
  </div>
  <p>ty的switch是if语句的语法糖,和c/c++用跳转表实现不同,ty的switch不要求switch condition是一个数字类型,只要这个条件变量和case子句能进行==运算即可(比如通过运算符重载)</p>
  <p>switch、if、while、do-while、for的子句都可以是一个语句或者一个block</p>
  <p>并且for是自带了两个block</p>
</template>
