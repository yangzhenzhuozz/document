<template>
  <div>下面展示了ty的hello world代码</div>
  <br/>
  <div class="code-header"><span>main.ty</span></div>
  <pre><code><div><span class="key-word">function</span> <span class="variable">main</span>(){</div><div>    system.console.WriteLine(<span class="string">"hello world"</span>);</div>};</code></pre>
  <br/>
  <div>输出如下:</div>
  <div class="console">hello world</div>
  <br/>
  <div>上面的代码也可以写成</div>
  <div class="code-header"><span>main.ty</span></div>
  <pre><code><div><span class="key-word">var</span> <span class="variable">main = </span>() => {</div><div>    system.console.WriteLine(<span class="string">"hello world"</span>);</div>};</code></pre>
</template>
<style scoped>
pre {
  background-color: #f2f2f2;
  margin-top: 0;
  margin-bottom: 0;
  padding: 5px 10px;
}
.code-header {
  background-color: #e8e6df;
}
.code-header>* {
  padding: 2px 16px;
  color: #161616;
}
.console {
  background-color: black;
  color: white;
}
.key-word {
  color: #0101fd;
}
.variable {
  color: #006881;
}
.string {
  color: #a31515;
}
</style>
