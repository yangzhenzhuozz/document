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
  <h1>值类型和引用类型:</h1>
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
      <div>}</div>
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
      <div>}</div>
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
      <div>}</div>
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
      <div>}</div>
    </code>
  </div>
  <p>假设使用到上面两个class的地方如下:</p>
  <div style="display: flex">
    <div class="code-area" style="display: inline-block; border: solid 1px">
      <code>
        <div>
          <span class="key-word">class </span>
          <span class="variable">bar1 </span>
          {
        </div>
        <div>
          &nbsp;&nbsp;<span class="key-word">var</span> foo:<span
            class="key-word"
            >foo_refernce</span
          >;
        </div>
        <div>}</div>
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
        <div>}</div>
      </code>
    </div>
  </div>
  <div>
    则<span class="key-word">sizeof</span>(bar1)=<span class="key-word"
      >sizeof</span
    >(pointer)(一个指针的大小,目前的实现是8字节),<span class="key-word"
      >sizeof</span
    >(bar2)=16 (<span class="key-word">sizeof</span
    >不是ty的操作符,这里只是作说明),<span class="variable">bar1</span>和<span
      class="variable"
      >bar2</span
    >的内存布局如下:
  </div>
  <div style="display: flex">
    <table>
      <tbody>
        <tr>
          <td class="variable">bar1</td>
        </tr>
        <tr>
          <td>foo:pointer</td>
          <td style="border: unset">-></td>
          <td>foo_refernce</td>
        </tr>
        <tr>
          <td style="border: unset"></td>
          <td style="border: unset"></td>
          <td>obj1:long</td>
        </tr>
        <tr>
          <td style="border: unset"></td>
          <td style="border: unset"></td>
          <td>obj2:long</td>
        </tr>
      </tbody>
    </table>
    <div style="flex-basis: 5px"></div>
    <table>
      <tbody>
        <tr>
          <td class="variable">bar2</td>
        </tr>
        <tr>
          <td>foo_value.obj1:long</td>
        </tr>
        <tr>
          <td>foo_value.obj2:long</td>
        </tr>
      </tbody>
    </table>
  </div>
  <br />
  <div>假设一个函数代码如下:</div>
  <div class="code-area" style="display: inline-block; border: solid 1px">
    <code>
      <div>
        <span class="key-word">function </span>
        <span class="variable">main</span> () {
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">var</span> foo1:<span
          class="key-word"
          >foo_refernce</span
        >;
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">var</span> foo2:<span
          class="key-word"
          >foo_value</span
        >;
      </div>
      <div>};</div>
    </code>
  </div>
  <div>
    同样的，这个函数block的变量栈需要使用24字节,下面就是局部变量栈的内存布局:
  </div>
  <table>
    <tbody>
      <tr>
        <td class="variable">main_block</td>
      </tr>
      <tr>
        <td>foo1:pointer</td>
        <td style="border: unset">-></td>
        <td>foo_refernce</td>
      </tr>
      <tr>
        <td>foo2.obj1:long</td>
        <td style="border: unset"></td>
        <td>obj1:long</td>
      </tr>
      <tr>
        <td>foo2.obj1:long</td>
        <td style="border: unset"></td>
        <td>obj2:long</td>
      </tr>
    </tbody>
  </table>
  <br />
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
        <td>存放对象的每个属性,整个变量存储在栈空间(stack)</td>
        <td>栈中只存放对象的引用,变量存储在堆空间(heap)</td>
      </tr>
      <tr>
        <td>函数传参</td>
        <td>传递的是对象的一个拷贝,在被调用函数中修改的值都是变量拷贝值</td>
        <td>传递的是对象的一个引用,在被调用函数中修改的是原对象真实属性</td>
      </tr>
    </tbody>
  </table>
  <br />
  <h1>数组:</h1>
  <div>
    数组类型声明语法如下: <span class="key-word">type</span>[],如<span
      class="key-word"
      >int</span
    >[],需要注意的是,type也可以是个数组,如<span class="key-word">int[]</span
    >[],这样就得到一个数组的数组(c#中叫做<span class="variable">交错数组</span
    >,java中叫做<span class="variable">多维数组</span>)
  </div>
  <div>new一个数组时,语法如下:</div>
  <div>
    <span class="key-word">new type</span
    ><span class="emphasis">[n1][n2]~[nm]</span><span>[][]...</span>
  </div>
  <div>
    <span class="key-word">new int</span> [3] [3][][]
    <span class="comment"
      >//定义一个四维数组,第四维和第三维长度都是3,第二维和第一维暂未赋值(这种语法和java一样)</span
    >
  </div>
  <div>
    数组有一个唯一属性:<span class="variable">length</span>:<span
      class="key-word"
      >int</span
    >
  </div>
  <h1>函数:</h1>
  <p>函数的定义语法为:</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">function</span>
        <span class="variable"> name</span>(id:<span class="key-word">type</span
        >[,other_argument_list])[:<span class="key-word">retType</span>]{
      </div>
      <div>&nbsp;&nbsp;xxxx</div>
      <div>}</div>
    </code>
  </div>
  <p>
    如果函数能推导出返回值类型,则不必声明返回值类型,但是有时候无法推导返回值类型,则必须定义其返回值类型,比如如下的递归函数
  </p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">function</span>
        <span class="variable"> foo</span>(v:<span class="key-word">int</span>){
      </div>
      <div>&nbsp;&nbsp;<span class="key-word">if</span>(v&gt;0){</div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="key-word">return</span> foo(v-1);
      </div>
      <div>&nbsp;&nbsp;}<span class="key-word">else</span>{</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="key-word">return</span> 0;</div>
      <div>&nbsp;&nbsp;}</div>
      <div>};</div>
    </code>
  </div>
  <p>
    这个函数始终返回0,但是编译器编译的时候会尝试解析else分支中对foo的调用,并将其返回值类型作为外层foo的返回值类型,这样就陷入递归类型推导,所以递归函数必须声明返回值可惜,比如这种写法就可以通过编译
  </p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">function</span>
        <span class="variable"> foo</span>(v:<span class="key-word">int</span>){
      </div>
      <div>&nbsp;&nbsp;<span class="key-word">if</span>(v&lt;=0){</div>
      <div class="comment">
        <div>&nbsp;&nbsp;&nbsp;&nbsp;/*</div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;这里利用了tyc的一个特性:函数返回值类型要么由声明时指定,要么由第一条return语句指定
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;上面代码因为第一条return语句是对foo的调用,就会进入循环推导,导致无法判断返回值类型
        </div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;*/</div>
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="key-word">return</span> 0;</div>
      <div>&nbsp;&nbsp;}<span class="key-word">else</span>{</div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="key-word">return</span> foo(v-1);
      </div>
      <div>&nbsp;&nbsp;}</div>
      <div>};</div>
    </code>
  </div>
  <div>
    在ty中,一切皆对象,所以函数也是一个对象,例如hello
    world的示例代码中,就是定义了一个对象main,这个main对象的类型为:()=><span
      class="key-word"
      >void</span
    >
  </div>
  <div>函数类型的定义语法为:</div>
  <div>
    ([id:type][,id:type])=>retType,需要注意的是这里的各个id必须不同,但是和原函数的参数名不需要对应(id只是一个占位符)
  </div>
  <div>下面是一些示例代码</div>
  <div class="code-area" style="display: inline-block; border: solid 1px">
    <code>
      <div>
        <span class="key-word">function </span>
        <span class="variable">foo</span> () {
      </div>
      <div>};</div>
      <div>
        <span class="key-word">function </span>
        <span class="variable">add</span> (<span class="variable">a</span>:<span
          class="key-word"
          >int</span
        >,<span class="variable">b</span>:<span class="key-word">int</span>) {
      </div>
      <div>&nbsp;&nbsp;<span class="key-word">return</span> a+b;</div>
      <div>};</div>
      <div>
        <span class="key-word">var </span>
        <span class="variable">add2</span>=(<span class="variable">a</span
        >:<span class="key-word">int</span>,<span class="variable">b</span
        >:<span class="key-word">int</span>)=>{
      </div>
      <div>&nbsp;&nbsp;<span class="key-word">return</span> a+b;</div>
      <div>};</div>
      <pre class="comment">
/*
这里的add和add2没有本质区别,可以认为
function add(a:int,b:int){
    return a+b;
}
和
var add=(a:int,b:int)=>{return a+b;}
完全等价
function写法就是lambda表达式的语法糖
 */</pre
      >
      <div>
        <span class="key-word">function </span>
        <span class="variable">main</span> () {
      </div>
      <div>&nbsp;&nbsp;<span class="key-word">var</span> f1=foo;</div>
      <div>&nbsp;&nbsp;<span class="key-word">var</span> f2=add;</div>
      <div>&nbsp;&nbsp;f2(1,2);</div>
      <div>
        &nbsp;&nbsp;<span class="key-word">var</span> f3:(x:<span
          class="key-word"
          >int</span
        >,y:<span class="key-word">int</span>)=><span class="key-word">int</span
        ><span class="comment"
          >//这里的x,y只是一个占位符,没实际意义,即可以用任意id替换x、y</span
        >
        <div>&nbsp;&nbsp;f3=add;</div>
      </div>
      <div>&nbsp;&nbsp;f3(3,4);</div>
      <div>};</div>
    </code>
  </div>
</template>
<style scoped>
table {
  border-collapse: collapse;
}
th,
td {
  border: solid 1px;
}
</style>
