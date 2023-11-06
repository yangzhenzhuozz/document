<template>
  <p>
    ty的作用域和C++类似,支持全局变量,并且在不同层级的block可以定义同名变量(这和java略有不同)
  </p>
  <div class="code-area">
    <code>
      <div>{</div>
      <div>
        &nbsp;&nbsp;<span class="key-word">var</span>
        <span class="variable"> a</span>=2;
      </div>
      <div>&nbsp;&nbsp;{</div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="key-word">var</span>
        <span class="variable"> a</span>=2;<span class="comment">//c++支持在这个位置再定义一个变量a,java则会提示重复定义</span>
      </div>
      <div>&nbsp;&nbsp;}</div>
      <div>}</div>
    </code>
  </div>
</template>
