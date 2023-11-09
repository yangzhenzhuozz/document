<template>
  <p>这里借鉴了C#的get和set,其bnf如下:</p>
  <p>get</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">get</span> <span class="variable">id</span> ( ) :
        <span class="key-word">type</span> { statements } ;
      </div>
    </code>
  </div>
  <p>set</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">set</span> <span class="variable">id</span> (
        <span class="variable">id</span> : <span class="key-word">type</span> )
        { statements } ;
      </div>
    </code>
  </div>
  <p>如:</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">class </span>
        <span class="variable">myClass </span>
        {
      </div>
      <div>
        &nbsp;&nbsp;<span class="key-word">get </span>
        <span class="variable">a</span>():<span class="key-word">int</span>{
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="key-word">return</span> 0;</div>
      <div>&nbsp;&nbsp;};</div>
      <div>
        &nbsp;&nbsp;<span class="key-word">set </span>
        <span class="variable">a</span>(<span class="variable">arg</span>:<span
          class="key-word"
          >string</span
        >) {
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;system.console.WriteLine(<span class="string"
          >"这里调用了setter"</span
        >);
      </div>
      <div>&nbsp;&nbsp;};</div>
      <div>}</div>
    </code>
  </div>
  <p>然后我们就可以这样使用:</p>
  <div class="code-area">
    <code>
      <div>
        <span class="key-word">var </span>
        <span class="variable">obj</span>=<span class="key-word">new</span>
        <span class="variable">myClass </span>();
      </div>
      <div>
        <span class="key-word">var</span> <span class="variable">v</span>=<span
          class="variable"
          >obj</span
        >.<span class="variable">a</span>;
      </div>
      <div>
        <span class="variable">obj</span>.<span class="variable">a</span>=<span
          class="string"
          >"this is a string"</span
        >;
      </div>
    </code>
  </div>
</template>
