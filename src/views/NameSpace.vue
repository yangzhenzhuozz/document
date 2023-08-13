<template>
  <p>
    tyc在编译的时候会自动把文件名(不包含路径和扩展名,且扩展名必须以".ty"结尾)作为命名空间,假一个文件的路径为"/usr/home/myCode.ty",则会使用"myCode"作为命名空间。
  </p>
  <p>
    在开始扫描用户的代码文件之前,tyc会先加载"编译器执行文件目录/dist/compiler/lib"下面的所有ty文件,然后再扫描用户文件
  </p>
  <div>
    两个比较核心的文件:"编译器执行文件目录/dist/compiler/lib/system.ty"和"编译器执行文件目录/dist/compiler/lib/system.exception.ty"分别定义了VM运行的必备类型(string,byte,shor,bool等基本数据类型和VM运行时可能会抛出的异常)
  </div>
  <p>
    命名空间是排他的(exclusive),即使两个文件是在不同目录下,只要文件名一样,则会被编译器拒绝编译。
  </p>
  <p>如下两个输入文件会被编译器拒绝编译</p>
  <div>"dir1/foo.ty"</div>
  <div>"dir2/foo.ty"</div>
  <h1>跨文件使用变量和类型:</h1>
  <div style="border: solid 1px">
    <div class="code-header"><span>space1.ty</span></div>
    <div class="code-area">
      <code>
        <div>
          <span class="key-word">var </span>
          <span class="variable">obj </span>= 1;
        </div>
        <div>
          <span class="key-word">var </span>
          <span class="variable">fun </span
          ><span class="variable">=</span>()=>{};
        </div>
        <div><span class="key-word">class</span> myClass{</div>
        <div>&nbsp;&nbsp;xxxx</div>
        <div>}</div>
      </code>
    </div>
  </div>
  <div>则在space2.ty中应该这样使用space1.ty的变量和类型</div>
  <div style="border: solid 1px">
    <div class="code-header"><span>space2.ty</span></div>
    <div class="code-area">
      <code>
        <div>
          <span class="key-word">var</span> obj =
          <span class="variable">space1</span>.<span class="variable">obj</span
          >;<span class="comment"
            >//这里定义的obj属于space2,其初始值为space1</span
          >
        </div>
        <div>
          <span class="key-word">var</span> obj2 =
          <span class="key-word">new</span>
          <span class="variable"> space1</span>.<span class="variable"
            >myClass</span
          >();<span class="comment">//new一个space1空间的类型myClass</span>
        </div>
        <div>
          <span class="variable"> space1</span>.<span class="variable">fun</span
          >();<span class="comment"
            >//调用space1空间的变量fun(fun是一个函数类型的变量,所以可以被调用)</span
          >
        </div>
      </code>
    </div>
  </div>
  <h1>全局变量:</h1>
  <p>定义在某个space内的变量都是全局的,在所有代码中都可以对其进行访问</p>
  <h1>变量初始化顺序:</h1>
  <p>
    全局变量和class内部的变量初始化时都是按照其定义顺序进行初始化,function内部没有这个问题,因为function内部的变量是要求先声明后使用的。
  </p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var </span>
        <span class="variable">obj </span>= 1;
      </div>
      <div>
        <span class="key-word">var </span>
        <span class="variable">obj2 </span
        ><span class="variable">=</span> obj1;<span class="comment"
          >//可以正确初始化obj2为1,因为此时obj1已经初始化</span
        >
      </div>
    </code>
  </div>
  <div>而下面这种代码则无法正确初始化</div>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var </span>
        <span class="variable">obj </span>= obj2;<span class="comment"
          >//在对obj1设置初始值时,obj2还没有设置值,此时读取obj2会得到一个默认值</span
        >
      </div>
      <div>
        <span class="key-word">var </span>
        <span class="variable">obj2 </span><span class="variable">=</span> 1;
      </div>
    </code>
  </div>
  <div>多个命名空间中的全局变量则是安装传递给tyc的顺序进行初始化</div>
  <h1>main函数</h1>
  <p>
    tyc会在最后一个输入文件(也就是最后一个命名空间)中搜索一个名为main的全局变量,并对其进行类型检查,作为整个程序的入口(在调用main函数之前会调用一次system.init(),用户可以不用太关心这个)
  </p>
  <p>变量main的类型为:()=><span class="key-word">void</span></p>
  <p>通过上面说明可以知道:包括main函数都是定义在某个namespace的全局变量</p>
</template>
