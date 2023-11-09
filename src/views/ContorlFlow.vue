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
  <p>
    ty的switch是if语句的语法糖,和c/c++用跳转表实现不同,ty的switch不要求switch
    condition是一个数字类型,只要这个条件变量和case子句能进行==运算即可(比如通过运算符重载)
  </p>
  <p>switch、if、while、do-while、for的子句都可以是一个语句或者一个block,如:</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">if</span>(<span class="variable">obj</span>)
      </div>
      <div>&nbsp;&nbsp;xxxx</div>
    </code>
  </div>
  和下面代码功能一样
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">if</span>(<span class="variable">obj</span>){
      </div>
      <div>&nbsp;&nbsp;xxxx</div>
      <div>}</div>
    </code>
  </div>
  <p>
    for、while、do-while、if、else、switch的子句都如此,并且如果的子句只有一句代码,不用大括号包裹,ty会自动将其包裹,具体表现为创建了一个新的变量作用域,如:
  </p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var</span> <span class="variable">a</span>=1;
      </div>
      <div>
        <span class="key-word">if</span>(<span class="variable">obj</span>)
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">var </span>
        <span class="variable">a</span>=1;<span class="comment"
          >//这里的a和上面的a不是同一个变量</span
        >
      </div>
    </code>
  </div>
  <p>而且对于for是则是自带了两个block,如:</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var</span> <span class="variable">a</span>=1;
      </div>
      <div>
        <span class="key-word">for</span>(<span class="key-word">var </span>
        <span class="variable">a</span>=1;xxx;xxx)<span class="comment"
          >//这里的a和上面的a不是同一个变量</span
        >
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">var </span>
        <span class="variable">a</span>=1;<span class="comment"
          >//这里的a和上面两个地方的a不是同一个变量</span
        >
      </div>
    </code>
  </div>
  <p>实际上ty把代码做了如下变换:</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var </span><span class="variable">a</span>=1;
      </div>
      <div>{</div>
      <div>
        &nbsp;&nbsp;<span class="key-word">for</span>(<span class="key-word"
          >var </span
        >
        <span class="variable">a</span>=1;xxx;xxx){<span class="comment"
          >//这是为了让for定义的变量作用域被限定在for循环中</span
        >
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="key-word">var </span>
        <span class="variable">a</span>=1;
      </div>
      <div>&nbsp;&nbsp;}</div>
      <div>}</div>
    </code>
  </div>
</template>
