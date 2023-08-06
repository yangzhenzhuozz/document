<template>
  <p>
    ty的变量可以从两个维度划分<br />从函数调用传值方式分为<em class="emphasis"
      >值类型</em
    >和<em class="emphasis">引用类型</em><br />从内存存储方式分为<em
      class="emphasis"
      >普通类型(PlainObject)</em
    >、<em class="emphasis">数组类型(Array)</em>和<em class="emphasis"
      >函数类型(Function)</em
    ><br />所有的<em class="emphasis">数组</em>和<em class="emphasis">函数</em
    >都是引用类型
  </p>
  <p>值类型和引用类型:</p>
  <p>值类型的定义方式为:</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">valuetype </span>
        <span class="key-word">class </span>
        <span class="variable">myClass </span>
        {
      </div>
      <div>&nbsp;&nbsp;xxxx</div>
      <div>};</div>
    </code>
  </div>
  <p>引用类型的定义方式为:</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">class </span>
        <span class="variable">myClass </span>
        {
      </div>
      <div>&nbsp;&nbsp;xxxx</div>
      <div>};</div>
    </code>
  </div>
  <p>值类型和引用类型的区别:</p>
  <p>假设有两个class如下</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">class </span>
        <span class="variable">foo_refernce </span>
        {
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">var</span> obj1:<span
          class="key-word"
          >long</span
        >;
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">var</span> obj2:<span
          class="key-word"
          >long</span
        >;
      </div>
      <div>};</div>
    </code>
    <code>
      <div>
        <span class="key-word">valuetype </span>
        <span class="key-word">class </span>
        <span class="variable">foo_value </span>
        {
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">var</span> obj1:<span
          class="key-word"
          >long</span
        >;
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">var</span> obj2:<span
          class="key-word"
          >long</span
        >;
      </div>
      <div>};</div>
    </code>
  </div>
  <p>使用到上面两个class的地方如下:</p>
  <div style="display: flex">
    <div class="code-area" style="display: inline-block; border: solid 1px">
      <code>
        <div>
          <span class="key-word">class </span>
          <span class="variable">bar2 </span>
          {
        </div>
        <div>
          &nbsp;&nbsp;<span class="key-word">var</span> foo:<span
            class="key-word"
            >foo_refernce</span
          >;
        </div>
        <div>};</div>
      </code>
    </div>
    <div
      class="code-area"
      style="display: inline-block; border: solid 1px; margin: 0 0 0 1px"
    >
      <code>
        <div>
          <span class="key-word">class </span>
          <span class="variable">bar2 </span>
          {
        </div>
        <div>
          &nbsp;&nbsp;<span class="key-word">var</span> foo:<span
            class="key-word"
            >foo_value</span
          >;
        </div>
        <div>};</div>
      </code>
    </div>
  </div>
  <div class="code-area" style="display: inline-block; border: solid 1px">
    <code>
      <div>
        <span class="key-word">function </span>
        <span class="variable">main </span>
        {
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">var</span> foo1:<span class="key-word"
          >foo_refernce</span
        >;
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">var</span> foo2:<span class="key-word"
          >foo_value</span
        >;
      </div>
      <div>};</div>
    </code>
  </div>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>值类型</th>
        <th>引用类型</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>存储</td>
        <td>
          <p>在使用中存储的是对象的真实数据</p>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>函数传参</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>
