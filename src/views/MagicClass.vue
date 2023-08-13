<template>
  ty内置了7中值类型和5个引用类型,位于system和system.exception两个命名空间中
  <div class="code-header">system</div>
  <table>
    <thead>
      <tr>
        <th colspan="3">值类型</th>
        <th colspan="3">引用类型</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>类型</td>
        <td>字面量</td>
        <td>说明</td>
        <td>类型</td>
        <td>字面量</td>
        <td>说明</td>
      </tr>
      <tr>
        <td>byte</td>
        <td>97b或者'a'</td>
        <td rowspan="7">
          这些值类型的操作符都由编译器实现,用户不可自己实现这些函数,这些重载的操作符仅仅用于编译器的类型检查,这些值类型在使用的时候都可以省略system命名空间前缀,即system.int等价于int<br/>
          object有点特殊,这个类大小为8字节(编译器和VM已经硬编码其大小了),用于保存一个指针,所以他是一个值类型(VM使用的时候和会把他当成long进行运算)
        </td>
        <td rowspan="7">string</td>
        <td rowspan="7">"abc"</td>
        <td rowspan="7">
          这个类只有构造函数是由编译器实现,当用户编写如下代码时
          <div class="code-area">
            <code>
              <div>
                <span class="key-word">var </span>
                <span class="variable">str </span>=
                <span class="string">"this is string"</span>;
              </div>
            </code>
          </div>
          编译器会自动创建一个byte数组,然后用这个数组构造一个string对象
        </td>
      </tr>
      <tr>
        <td>short</td>
        <td>1s</td>
      </tr>
      <tr>
        <td>int</td>
        <td>1</td>
      </tr>
      <tr>
        <td>long</td>
        <td>1l</td>
      </tr>
      <tr>
        <td>double</td>
        <td>1d或者1.0</td>
      </tr>
      <tr>
        <td>bool</td>
        <td>true/false</td>
      </tr>
      <tr>
        <td>object</td>
        <td>null</td>
      </tr>
    </tbody>
  </table>
  <br />
  <div class="code-header">system.exception</div>
  <table>
    <thead>
      <tr>
        <th colspan="3">引用类型</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>类型</td>
        <td>说明</td>
      </tr>
      <tr>
        <td>NullPointerException</td>
        <td rowspan="4">
          这些是VM运行时必须的类型,用户可以自定义实现,但是必须保留其无参构造函数
        </td>
      </tr>
      <tr>
        <td>ArithmeticException</td>
      </tr>
      <tr>
        <td>CastException</td>
      </tr>
      <tr>
        <td>ArrayIndexOutOfBoundsException</td>
      </tr>
    </tbody>
  </table>
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
