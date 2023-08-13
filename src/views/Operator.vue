<template>
  <p>任意对象均可自定义如下操作符:</p>
  <table>
    <thead>
      <tr>
        <th colspan="19">可重载的操作符</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>^</td>
        <td>&</td>
        <td>|</td>
        <td>&gt;&gt;</td>
        <td>>></td>
        <td>~</td>
        <td>%</td>
        <td>+</td>
        <td>-</td>
        <td>*</td>
        <td>/</td>
        <td>++</td>
        <td>--</td>
        <td>&gt;</td>
        <td>&gt;=</td>
        <td>></td>
        <td>>=</td>
        <td>==</td>
        <td>!=</td>
      </tr>
    </tbody>
  </table>
  <p>对象的操作符重载是函数调用的语法糖,如:</p>
  <div class="code-area" style="display: inline-block; border: solid 1px">
    <code>
      <div>
        <span class="key-word">class </span>
        <span class="variable">foo</span>{
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">operator</span> + ( other :
        <span class="key-word">string</span> ) :
        <span class="key-word">string</span>{
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;xxx</div>
      <div>&nbsp;&nbsp;};</div>
      <div>
        &nbsp;&nbsp;<span class="key-word">function</span> add ( other :
        <span class="key-word">string</span> ) :
        <span class="key-word">string</span>{
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;xxx</div>
      <div>&nbsp;&nbsp;};</div>
      <div>};</div>
    </code>
  </div>
  <p>则下面两种写法是完全等价的</p>
  <div class="code-area" style="display: inline-block; border: solid 1px">
    <code>
      <div>
        <span class="key-word">var </span>
        <span class="variable">obj </span>: <span class="variable">foo</span>;
        <span class="comment">//定义变量</span>
      </div>
      <br />
      <div>
        <span class="variable">obj</span>+<span class="string"
          >"this is string"</span
        >;
        <span class="comment">//写法1</span>
      </div>
      <div>
        <span class="variable">obj</span>.<span class="variable">add</span
        >(<span class="string">"this is string"</span>);
        <span class="comment">//写法2</span>
      </div>
    </code>
  </div>
  <p>
    操作符重载是函数的语法糖,但是可以让代码更容易看懂。比如java就不支持操作符重载,但是又对String的"+"和"+="做了特殊处理
  </p>
</template>
<style scoped>
table {
  border-collapse: collapse;
}
th {
  border: solid 1px;
}
td {
  border: solid 1px black;
  padding: 0 5px;
  color: #0101fd;
}
</style>
