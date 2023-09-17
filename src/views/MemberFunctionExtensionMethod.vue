<template>
  为了更向对象,ty支持扩展函数
  <h1>语法</h1>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">extension function</span>
        <span class="variable">name </span>(<span class="key-word"
          >this type</span
        >
        id[,other_argument_list])[:<span class="key-word">retType</span>]{
      </div>
      <div>&nbsp;&nbsp;xxxx</div>
      <div>}</div>
    </code>
  </div>
  <p>假设我们想要给int类型实现一个toString方法,实现之后就能写出这样的代码</p>
  <div class="code-area">
    <code>
      <div>1.toString();</div>
    </code>
  </div>
  <div>
    值类型的扩展函数和成员函数一样的用法，但是值类型的就略有不同,访问值类型的扩展函数会复制这个值类型并创建一个闭包，把复制出来的变量捕获，然后再进行调用,会出现这种情况。
  </div>
  <div class="code-area">
    <code>
      <span class="key-word">extension function</span
      ><span class="variable"> foo</span>(<span class="key-word">this int</span>
      v) {
      <div>&nbsp;&nbsp;v++;</div>
      <div>&nbsp;&nbsp;<span class="key-word">return</span> v;</div>
      <div>}</div>
      <div>
        <span class="key-word">var</span> <span class="variable">a</span>=5;
      </div>
      <div>
        <span class="key-word">var</span>
        <span class="variable">f</span>=a.foo;<span class="comment"
          >//访问扩展函数，创建闭包</span
        >
      </div>
      <div>f();<span class="comment">//返回6</span></div>
      <div>f();<span class="comment">//返回7</span></div>
      <div>
        <span class="key-word">var</span>
        <span class="variable">f</span>=a.foo;<span class="comment"
          >//重新访问扩展函数，创建闭包</span
        >
      </div>
      <div>f();<span class="comment">//再次返回6</span></div>
    </code>
  </div>
  <p>
    闭包捕获的变量生存期是和闭包函数一样的，所以被捕获的这个复制变量会和访问扩展函数时创建的闭包一起存在。实际上上述特性和C#的扩展函数表现的一致，扩展函数本身就是一个语法糖，扩展值类型进行函数调用的时候就应该用值传递，不能影响到原来变量的值，这里只是顺便介绍一下实现的细节而已，不用太过于纠结。
  </p>
  <h1>成员函数</h1>
  <p>
    就和其他编程语言一样，没什么特殊的(访问值类型的成员函数会将这个值类型变量进行闭包捕获原因如下)
  </p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">function</span>
        <span class="variable">foo </span>(){
      </div>
      <div>&nbsp;&nbsp;<span class="key-word">var</span> a=5;</div>
      <div>
        &nbsp;&nbsp;<span class="key-word">return</span> a.toString;<span
          class="comment"
          >//这里a的作用域会被返回的这个成员函数影响，因为成员函数实例将会一直持有该对象，而这里成员函数将会被作为返回值返回，所以必须对变量a进行特殊处理</span
        >
      </div>
      <div>}</div>
    </code>
  </div>
  <div>这里也只是顺便介绍一下，如果用户只是简单写写代码，不需要关心这些细节</div>
</template>
