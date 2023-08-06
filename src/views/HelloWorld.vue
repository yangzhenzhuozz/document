<template>
  <div>下面展示了ty的hello world代码</div>
  <br />
  <div class="code-header"><span>main.ty</span></div>
  <pre
    class="code-area"
  ><code><div><span class="key-word">function</span> <span class="variable">main</span>(){</div><div>    system.console.WriteLine(<span class="string">"hello world"</span>);</div>};</code></pre>
  <br />
  <div>输出如下:</div>
  <div class="console">hello world</div>
  <br />
  <div>上面的代码也可以写成</div>
  <div class="code-header"><span>main.ty</span></div>
  <pre
    class="code-area"
  ><code><div><span class="key-word">var</span> <span class="variable">main = </span>() => {</div><div>    system.console.WriteLine(<span class="string">"hello world"</span>);</div>};</code></pre>
</template>
