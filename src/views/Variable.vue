<template>
  <div>变量声明:</div>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var</span>
        <span class="variable">a</span>=1;<span class="comment">
          //声明一个可修改变量a,类型为system.int</span
        >
      </div>
      <div>
        <span class="key-word">val</span>
        <span class="variable">b</span>=1;<span class="comment">
          //声明一个不可修改变量b,类型为system.int</span
        >
      </div>
    </code>
  </div>
  <p>
    ty是一个强类型语言,所有的变量声明都必须指定类型,或者由类型推导机制推导出变量类型,下面是一些正确的声明类型语句
  </p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var </span> <span class="variable">a</span>=1;
      </div>
      <div>
        <span class="key-word">var </span>
        <span class="variable">a</span>:<span class="key-word">int</span>=1;
      </div>
      <div>
        <span class="key-word">var </span>
        <span class="variable">a</span>:<span class="key-word">int</span>;
      </div>
    </code>
  </div>
  <p>下面则是错误的变量声明语句</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var</span> <span class="variable">a</span>;
        <span class="comment"
          >//没有显式指定a的类型,且类型推导机制无法推导出a的类型</span
        >
      </div>
    </code>
  </div>
  <p><span class="key-word">var</span>和<span class="key-word">val</span></p>
  <p>
    每个变量都必须指明其是可修改<span class="key-word">var</span
    >(variable的缩写)还是不可修改<span class="key-word">val</span>(value的缩写)
  </p>
</template>
