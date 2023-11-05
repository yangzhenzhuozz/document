<template>
  <p>ty使用try-catch语句处理异常,语句如下:</p>
  <div class="code-area">
    <code>
      <div><span class="key-word">try</span>{</div>
      <div>&nbsp;&nbsp;xxxx</div>
      <div>
        }<span class="key-word">catch</span>(<span class="variable">e1</span
        >:<span class="key-word">type</span>){
      </div>
      <div>&nbsp;&nbsp;xxxx</div>
      <div>
        }<span class="key-word">catch</span>(<span class="variable">e2</span
        >:<span class="key-word">type</span>){
      </div>
      <div>&nbsp;&nbsp;xxxx</div>
      }
      <div>...</div>
    </code>
  </div>
  <p>
    一个try语句必须附带一个或者多个catch子句,每个catch子句(catch
    clause)需要指定一个捕获类型,当出现多个catch子句时,会从上往下搜索,直到遇到匹配的异常类型
  </p>
  <p>
    <em>如果有多个catch子句捕获同一类型的异常,则写在最前面的子句先捕获异常</em>
  </p>
  <p>
    <em>如果代码抛出异常,但是没有被任何catch子句捕获,则异常依次向外抛出,直至程序崩溃</em>
  </p>
</template>
