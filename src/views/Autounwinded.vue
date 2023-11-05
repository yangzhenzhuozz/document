<template>
  <p>
    这里借鉴C#的using语句(java中也叫做try-with-resource),当变量离开作用域时,立马自动执行清理语句
  </p>
  <div class="code-area">
    <code>
      <div><span class="key-word">class</span> MyClass{</div>
      <div>
        &nbsp;&nbsp;<span class="key-word">function</span> unwinded(){<span
          class="comment"
          >//定义一个无参、无返回值,且名为unwinded的方法</span
        >
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;xxx</div>
      <div>&nbsp;&nbsp;}</div>
      <div>}</div>
      <div>
        <span class="key-word">autounwinding</span>(<span class="key-word">
          var
        </span>
        <span class="variable"> obj1</span>=<span class="key-word">new</span>
        MyClass();<span class="key-word">var</span>
        <span class="variable"> obj2</span>=<span class="key-word">new</span>
        MyClass()){
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;xxx</div>
      <div>
        }<span class="comment"
          >//当代码执行到这一行的时候自动调用obj1,obj2的unwinded方法</span
        >
      </div>
      <div>
        <span class="key-word">autounwinding</span>(<span class="key-word"
          >var</span
        >
        <span class="variable"> obj</span>=<span class="key-word">new</span>
        MyClass()){<span class="comment">//当只有一个变量时,不需要写分号</span>
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;xxx</div>
      <div>
        }<span class="comment"
          >//当代码执行到这一行的时候自动调用obj的unwinded方法</span
        >
      </div>
    </code>
  </div>
  <p>当上述代码遇到异常时,假设在第二个autounwinding clause中,初始化obj1成功了,但是在初始化obj2的时候异常,这时候只会调用obj1的unwinded</p>
</template>
