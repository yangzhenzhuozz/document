<template>
  ty是强类型的编程语言,所以每个变量定义的时候都必须指明类型以预留存储空间
  <h1>类型转换语法</h1>
  <div class="code-area">
    <code>
      <div>
        (<span class="key-word">type </span>)<span class="variable">obj</span>
      </div>
    </code>
  </div>
  <h1>隐式类型转换</h1>
  <p>
    遗憾的是,因为作者个人喜好,暂时不支持隐式类型转换,因为我之前被这样的代码坑过
  </p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">double </span>
        <span class="variable">v </span>=1/3;
      </div>
    </code>
  </div>
  <h1>显式类型转换</h1>
  <p>目前ty要求所有的类型转换都必须由程序员手工指定,所以上面的代码必须这样写</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var </span>
        <span class="variable">v</span>:<span class="key-word">double</span>
        =(<span class="key-word">double</span>)1/(<span class="key-word"
          >double</span
        >)3;
      </div>
    </code>
  </div>
  <h1>装箱</h1>
  <p>
    任何值都可以转换成一个object,当值类型转换成object的时候,会在heap申请一段内存空间,并把值复制到heap中
  </p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var </span>
        <span class="variable">obj</span>:<span class="key-word">object</span>
        =(<span class="key-word">object</span>)1;<span class="comment"
          >//装箱,会在heap创建一个对象</span
        >
      </div>
    </code>
  </div>
  <h1>拆箱</h1>
  <p>
    当一个object被强制转型成值类型的时候就会发生拆箱,从heap把值复制到使用他的地方
  </p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var </span>
        <span class="variable">obj</span>:<span class="key-word">object</span>
        =(<span class="key-word">object</span>)1;<span class="comment"
          >//装箱,会在heap创建一个对象</span
        >
      </div>
      <div>
        <span class="key-word">var </span>
        <span class="variable">v</span>:<span class="key-word">int</span>
        =(<span class="key-word">int</span>)obj;<span class="comment"
          >//拆箱,把heap的值复制到v</span
        >
      </div>
    </code>
  </div>
  <h1>null</h1>
  <p>任何引用类型都可以和null对比,值类型则不能和null对比</p>
  <p>null只支持"=="和"!="两个操作符</p>
</template>
