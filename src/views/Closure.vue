<template>
  <h1>闭包</h1>
  <p>
    闭包是在支持函数作为一等类型的编程语言中实现词法范围绑定的技术。在操作上，闭包是一个把函数和环境存储在一起的记录。引用自wikipedia
  </p>
  <p>
    (closure) is a technique for implementing lexically scoped name binding in a
    language with first-class functions. Operationally, a closure is a record
    storing a function[a] together with an environment.
    <sup
      ><a href="https://en.wikipedia.org/wiki/Closure_(computer_programming)#"
        >[wikipedia]</a
      ></sup
    >
  </p>
  <p>
    单看上面的解释，可能难以理解(因为我也不会翻译长难句，机翻的也彼此彼此)，所以在下面的代码中进行一些说明:
  </p>
  <p>
    在ty中，闭包就是在引用了非该函数创建的局部变量的函数和环境的整体,直接上代码
  </p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">function</span>
        <span class="variable"> foo</span>(a:<span class="key-word">int</span>){
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">var</span>
        <span class="variable"> b</span>=2;
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">function</span>
        <span class="varialbe"> inner</span>(c:<span class="key-word">int</span
        >){
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="key-word">return</span> a+b+c;
      </div>
      <div>&nbsp;&nbsp;}</div>
      <div>&nbsp;&nbsp;<span class="key-word">return</span> inner;</div>
      <div>};</div>
    </code>
  </div>
  <p>如果我们执行这样的代码</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var</span> foo=outter(1);<span class="comment"
          >//得到一个函数</span
        >
      </div>
      <div>
        <span class="key-word">var</span> value=foo(3);<span class="comment"
          >//调用函数，此时value=1+2+3</span
        >
      </div>
    </code>
  </div>
  <p>
    编译器会自动判断那些局部变量被闭包捕获，然后使这些局部变量脱离原来的作用域，并且把新的作用域绑定到闭包上面。
  </p>
  <h1>被捕获变量和闭包函数局部变量的区别</h1>
  <p>
    被闭包捕获的变量会和这个闭包函数一起存在，而闭包函数内部的局部变量只有代码执行到的时候才存在，见下面代码
  </p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var</span> foo=outter(1);<span class="comment"
          >//得到一个函数</span
        >
      </div>
      <div>
        <span class="key-word">var</span> value=foo(3);<span class="comment"
          >//调用函数，此时value=1+2+3</span
        >
      </div>
      <div>
        <span class="key-word">var</span> value=foo(4);<span class="comment"
          >//调用函数，此时value=1+2+4</span
        >
      </div>
    </code>
  </div>
  <p>
    可以看到，我们创建了一个函数foo之后，这个函数捕获了两个变量a、b，其值分别为1,2，那么每次调用foo的时候，这两个被捕获的变量的值都跟着函数实例foo存在，而局部变量c则是随着传递进去的参数不同而不同
  </p>
</template>
