<template>
  <p>为了能更好的支持泛型等特性,ty支持模板函数和模板类</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">class </span>
        <span class="variable">myClass</span>&lt;<span>T</span>&gt; {
      </div>
      <div>}</div>
      <div>
        <span class="key-word">function </span>
        <span class="variable">foo</span>&lt;<span>T</span>&gt;():T {
      </div>
      <div>}</div>
    </code>
  </div>
  <p>模板函数只能定义在全局作用域,不能定义在class内部或者函数内部(比如定义一个模板lambda)</p>
  <p>和c++类似,ty的模板在特化的时候才真正编译,模板定义时只做基本的语法检查,所以我们可以写出如下的代码,并且编译时不报错</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">function </span>
        <span class="variable">foo</span>&lt;<span>T</span>&gt;():T {
      </div>
      <div>&nbsp;&nbsp;a++;<span class="comment">//即使这里的a没有定义也不会报错</span></div>
      <div>}</div>
    </code>
  </div>
  <p>使用:</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var </span>
        <span class="variable">obj1</span>=<span class="key-word">new </span><span class="variable">myClass</span>&lt;<span class="key-word">int</span>&gt;();
      </div>
      <div>
        <span class="key-word">var </span>
        <span class="variable">obj2</span>=namespace.foo&lt;<span class="key-word">int</span>&gt;();<span class="comment">//需要注意的是,即使在同一个文件中定义的模板函数,使用的时候也必须加上命名空间,而模板类则不需要</span>
      </div>
    </code>
  </div>
  <p>
    <em>需要注意的是,即使在同一个文件中定义的模板函数,使用的时候也必须加上命名空间,而模板类则不需要,因为在特化模板函数的时候把这个函数放到全局空间中去了(函数也是一个object),这里就当做是ty的一个特性吧</em>
  </p>
</template>
