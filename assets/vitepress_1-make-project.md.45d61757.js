import{_ as s,c as n,o as a,a as p}from"./app.7e786679.js";const d=JSON.parse('{"title":"Vitepress \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131\uD558\uAE30","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vitepress \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uB294 \uBC29\uBC95","slug":"vitepress-\uD504\uB85C\uC81D\uD2B8\uB97C-\uC0DD\uC131\uD558\uB294-\uBC29\uBC95","link":"#vitepress-\uD504\uB85C\uC81D\uD2B8\uB97C-\uC0DD\uC131\uD558\uB294-\uBC29\uBC95","children":[]},{"level":2,"title":"1. \uAE30\uBCF8\uC801\uC778 \uD3F4\uB354 \uAD6C\uC870","slug":"_1-\uAE30\uBCF8\uC801\uC778-\uD3F4\uB354-\uAD6C\uC870","link":"#_1-\uAE30\uBCF8\uC801\uC778-\uD3F4\uB354-\uAD6C\uC870","children":[]},{"level":2,"title":"2. vue\uC640 vitepress \uC124\uCE58\uD558\uAE30","slug":"_2-vue\uC640-vitepress-\uC124\uCE58\uD558\uAE30","link":"#_2-vue\uC640-vitepress-\uC124\uCE58\uD558\uAE30","children":[]},{"level":2,"title":"3. docs \uD3F4\uB354\uC5D0 .md \uD30C\uC77C \uB9CC\uB4E4\uC5B4\uC11C \uC791\uC131\uD574\uBCF4\uAE30","slug":"_3-docs-\uD3F4\uB354\uC5D0-md-\uD30C\uC77C-\uB9CC\uB4E4\uC5B4\uC11C-\uC791\uC131\uD574\uBCF4\uAE30","link":"#_3-docs-\uD3F4\uB354\uC5D0-md-\uD30C\uC77C-\uB9CC\uB4E4\uC5B4\uC11C-\uC791\uC131\uD574\uBCF4\uAE30","children":[]},{"level":2,"title":"4. \uBE4C\uB4DC\uD558\uACE0 \uBC30\uD3EC\uD558\uAE30","slug":"_4-\uBE4C\uB4DC\uD558\uACE0-\uBC30\uD3EC\uD558\uAE30","link":"#_4-\uBE4C\uB4DC\uD558\uACE0-\uBC30\uD3EC\uD558\uAE30","children":[]}],"relativePath":"vitepress/1-make-project.md"}'),l={name:"vitepress/1-make-project.md"},e=p(`<h1 id="vitepress-\uD504\uB85C\uC81D\uD2B8-\uC0DD\uC131\uD558\uAE30" tabindex="-1">Vitepress \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131\uD558\uAE30 <a class="header-anchor" href="#vitepress-\uD504\uB85C\uC81D\uD2B8-\uC0DD\uC131\uD558\uAE30" aria-hidden="true">#</a></h1><h2 id="vitepress-\uD504\uB85C\uC81D\uD2B8\uB97C-\uC0DD\uC131\uD558\uB294-\uBC29\uBC95" tabindex="-1">Vitepress \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uB294 \uBC29\uBC95 <a class="header-anchor" href="#vitepress-\uD504\uB85C\uC81D\uD2B8\uB97C-\uC0DD\uC131\uD558\uB294-\uBC29\uBC95" aria-hidden="true">#</a></h2><p>\uC0DD\uAC01\uBCF4\uB2E4 \uC2EC\uD50C\uD558\uB2E4. \uD06C\uAC8C 4\uAC00\uC9C0 \uC2A4\uD15D\uC774\uB2E4.</p><ol><li>\uAE30\uBCF8\uC801\uC778 \uD3F4\uB354 \uAD6C\uC870\uB97C \uAC16\uCD98\uB2E4.</li><li>vue\uC640 vitepress \uD328\uD0A4\uC9C0\uB97C \uC124\uCE58\uD55C\uB2E4.</li><li>docs \uD3F4\uB354 \uC548\uC5D0 markdown (.md \uD30C\uC77C)\uB85C \uAE00\uC744 \uC791\uC131\uD55C\uB2E4.</li><li>\uBE4C\uB4DC \uD6C4 \uBC30\uD3EC\uD55C\uB2E4. \uB05D!</li></ol><p>\uC2A4\uD15D \uD558\uB098\uC529 \uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uC790.</p><h2 id="_1-\uAE30\uBCF8\uC801\uC778-\uD3F4\uB354-\uAD6C\uC870" tabindex="-1">1. \uAE30\uBCF8\uC801\uC778 \uD3F4\uB354 \uAD6C\uC870 <a class="header-anchor" href="#_1-\uAE30\uBCF8\uC801\uC778-\uD3F4\uB354-\uAD6C\uC870" aria-hidden="true">#</a></h2><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 docs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500 getting</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">started</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500 index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500 package</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\uC704 \uB3C4\uC2DD\uC774 \uAC00\uC7A5 \uBCA0\uC774\uC2A4\uAC00 \uB418\uB294 \uD3F4\uB354 \uAD6C\uC870\uC774\uB2E4. docs \uB77C\uB294 \uC774\uB984\uC758 \uD3F4\uB354 \uC548\uC5D0 .md(\uB9C8\uD06C\uB2E4\uC6B4) \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uBA74 \uB41C\uB2E4. \uCD94\uD6C4\uC5D0 \uD504\uB85C\uC81D\uD2B8 \uBE4C\uB4DC\uBA85\uB839\uC5B4\uB97C \uB0A0\uB9AC\uBA74 \uC5EC\uAE30\uC5D0 \uC788\uB294 \uD30C\uC77C\uB4E4\uC774 html \uBB38\uC11C\uB85C \uBCC0\uD658\uB41C\uB2E4. \uADF8\uB9AC\uACE0 \uD328\uD0A4\uC9C0\uB97C \uAD00\uB9AC\uD574\uC8FC\uB294 package.json \uD30C\uC77C\uC774 \uC788\uB2E4. \uC774 \uD30C\uC77C\uC5D0\uC11C\uB294 \uC5EC\uB7EC \uD328\uD0A4\uC9C0\uB4E4\uC744 \uAD00\uB9AC\uD574\uC900\uB2E4. \uC774\uAC8C \uAE30\uBCF8 \uD3F4\uB354\uAD6C\uC870\uC758 \uB05D\uC774\uB2E4. \uADF8\uB798\uC11C \uC544\uBB34 \uD3F4\uB354 \uD558\uB098 \uB9CC\uB4E0 \uD6C4\uC5D0, \uC548\uC5D0\uB2E4\uAC00 docs \uD3F4\uB354 \uD558\uB098 \uB9CC\uB4E4\uACE0, package.json \uD30C\uC77C \uB9CC\uB4E4\uC5B4\uC8FC\uBA74 \uB05D!</p><h2 id="_2-vue\uC640-vitepress-\uC124\uCE58\uD558\uAE30" tabindex="-1">2. vue\uC640 vitepress \uC124\uCE58\uD558\uAE30 <a class="header-anchor" href="#_2-vue\uC640-vitepress-\uC124\uCE58\uD558\uAE30" aria-hidden="true">#</a></h2><p>yarn\uC774\uB098 npm \uAC19\uC740 \uD328\uD0A4\uC9C0 \uB9E4\uB2C8\uC800 \uC544\uBB34\uAC70\uB098 \uC120\uD0DD\uD574\uC11C vitepress\uC640 vue\uB97C \uC124\uCE58\uD574\uC900\uB2E4. \uC544\uB798 \uBA85\uB839\uC5B4\uB97C \uCC38\uACE0\uD558\uC790.</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">dev vitepress vue</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\uC774\uB807\uAC8C \uBA85\uB839\uC5B4\uB85C \uC124\uCE58\uB97C \uD574\uB3C4 \uB418\uACE0 \uADF8\uB0E5 package.json\uC5D0 devDependencies\uC5D0 \uCD94\uAC00\uD55C \uD6C4\uC5D0 npm install (yarn install)\uC744 \uD574\uB3C4 \uB41C\uB2E4. \uC6D0\uD558\uB294 \uD2B9\uC815 \uBC84\uC804\uC774 \uC788\uAC70\uB098, \uC5EC\uB7EC package\uB4E4\uC744 \uD55C\uBC88\uC5D0 \uC124\uCE58\uD560 \uB54C\uB294 package.json\uC5D0 \uC801\uB294 \uAC8C \uB354 \uD3B8\uD558\uB2E4.</p><p>\uCC38\uACE0\uB85C \uD604\uC7AC \uB098\uC758 package.json\uC740 \uC774\uB807\uAC8C \uC0DD\uACBC\uB2E4. css\uB97C less\uB85C \uAD00\uB9AC\uD558\uACE0 \uC2F6\uC5B4\uC11C less\uB97C \uCD94\uAC00\uB85C \uC124\uCE58\uD588\uB2E4.</p><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hongjyoun-github-blog</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">private</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress dev docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">serve</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress serve docs --port 3000</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">devDependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">less</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^4.1.3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">vitepress</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^1.0.0-alpha.19</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^3.2.37</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_3-docs-\uD3F4\uB354\uC5D0-md-\uD30C\uC77C-\uB9CC\uB4E4\uC5B4\uC11C-\uC791\uC131\uD574\uBCF4\uAE30" tabindex="-1">3. docs \uD3F4\uB354\uC5D0 .md \uD30C\uC77C \uB9CC\uB4E4\uC5B4\uC11C \uC791\uC131\uD574\uBCF4\uAE30 <a class="header-anchor" href="#_3-docs-\uD3F4\uB354\uC5D0-md-\uD30C\uC77C-\uB9CC\uB4E4\uC5B4\uC11C-\uC791\uC131\uD574\uBCF4\uAE30" aria-hidden="true">#</a></h2><p>docs \uD3F4\uB354\uC5D0 <a href="http://index.md" target="_blank" rel="noreferrer">index.md</a> (\uB2E4\uB978 \uC774\uB984\uC774\uC5B4\uB3C4 \uC88B\uB2E4) \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5B4\uC11C \uC81C\uBAA9\uC744 \uC785\uB825\uD574\uBCF4\uC790. \uB9C8\uD06C\uB2E4\uC6B4 \uBB38\uC11C\uB294 \uB9C8\uD06C\uB2E4\uC6B4 \uBB38\uBC95\uC73C\uB85C \uC791\uC131\uD574\uC57C \uD574\uC11C \uADF8 \uC804\uC5D0 \uBB38\uBC95\uC744 \uC57D\uAC04 \uC775\uD788\uB294 \uC2DC\uAC04\uC774 \uD544\uC694\uD558\uB2E4. \uD558\uC9C0\uB9CC \uBCC4\uB85C \uC5B4\uB835\uC9C0 \uC54A\uC544\uC11C \uAE08\uBC29 \uD560 \uC218 \uC788\uB2E4. \uC624\uD788\uB824 \uB2E8\uCD95\uD0A4\uAC19\uC740 \uB290\uB08C\uC774\uC5B4\uC11C \uC791\uC131\uC2DC\uC5D0 \uD3B8\uD560 \uB54C\uB3C4 \uC788\uB2E4. \uADF8\uB9AC\uACE0 \uAE30\uBCF8 \uB9C8\uD06C\uB2E4\uC6B4 \uBFD0 \uC544\uB2C8\uB77C, vitepress \uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uB514\uC790\uC778\uC5D0 \uB300\uD55C \uCF54\uB4DC\uB3C4 \uC788\uC5B4\uC11C \uC774\uAC78 \uD65C\uC6A9\uD574\uC11C \uB2E4\uCC44\uB85C\uC6B4 \uAE00\uC744 \uC791\uC131\uD574\uBCFC \uC218\uB3C4 \uC788\uB2E4. \uC774 \uBD80\uBD84\uC740 \uB098\uC911\uC5D0 \uB530\uB85C \uAE00\uB85C \uB2E4\uB8E8\uB3C4\uB85D \uD558\uACA0\uC2B4!</p><div class="language-markdown line-numbers-mode"><button class="copy"></button><span class="lang">markdown</span><pre><code><span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uBCF4\uC790</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_4-\uBE4C\uB4DC\uD558\uACE0-\uBC30\uD3EC\uD558\uAE30" tabindex="-1">4. \uBE4C\uB4DC\uD558\uACE0 \uBC30\uD3EC\uD558\uAE30 <a class="header-anchor" href="#_4-\uBE4C\uB4DC\uD558\uACE0-\uBC30\uD3EC\uD558\uAE30" aria-hidden="true">#</a></h2><p>\uC704\uC5D0 \uCC38\uACE0\uB85C \uC801\uC5B4\uB193\uC740 package.json\uC744 \uBCF4\uBA74 scripts \uAC00 \uCD94\uAC00\uB418\uC5B4 \uC788\uB294 \uAC83\uC744 \uBCFC \uC218 \uC788\uB2E4. Vitepress \uACF5\uC2DD\uBB38\uC11C\uC5D0 \uB530\uB974\uBA74, \uC544\uB798\uC640 \uAC19\uC740 \uC2A4\uD06C\uB9BD\uD2B8 \uBA85\uB839\uC5B4\uB97C \uCD94\uAC00\uD558\uB77C\uACE0 \uB418\uC5B4 \uC788\uB2E4.</p><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress dev docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:serve</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress serve docs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\uB098\uB294 \uC800\uAE30\uC11C docs: \uC774 \uBD80\uBD84\uC744 \uC0DD\uB7B5\uD588\uB2E4 \u314B \uBC88\uAC70\uB85C\uC6CC\uC11C.. \uC6B0\uCA0C\uB4E0, vitepress dev docs \uB294 \uB85C\uCEEC\uC5D0\uC11C \uAC1C\uBC1C\uBAA8\uB4DC\uB85C \uC0AC\uC774\uD2B8\uB97C \uB744\uC6CC\uBCFC \uC218 \uC788\uACE0, build\uB97C \uD558\uBA74 docs/.vitepress/dist \uD3F4\uB354 \uC548\uC5D0 html \uD30C\uC77C\uB4E4\uC774 \uB9CC\uB4E4\uC5B4\uC9C0\uB294 \uAC83\uC744 \uD655\uC778\uD560 \uC218 \uC788\uB2E4!</p><p>vitepress dev docs \uBA85\uB839\uC5B4\uB97C \uC785\uB825\uD574\uC11C \uB85C\uCEEC\uC5D0\uC11C \uC0AC\uC774\uD2B8\uB97C \uB744\uC6CC\uBCF4\uC790. \uB0B4\uAC00 \uB9CC\uB4E0 <a href="http://index.md" target="_blank" rel="noreferrer">index.md</a> \uD30C\uC77C\uC774 html\uB85C \uBCC0\uD658\uB418\uC5B4 \uB098\uC624\uB294 \uAC78 \uD655\uC778\uD560 \uC218 \uC788\uB2E4.</p><p>\uC774\uC81C \uC5B4\uB518\uAC00\uB85C \uBC30\uD3EC\uB97C \uD574\uC57C\uB418\uB294\uB370, \uBE4C\uB4DC \uD6C4 \uC0DD\uC131\uB41C \uD30C\uC77C\uB4E4\uC744 \uBCF4\uBA74 static html \uD30C\uC77C\uB4E4\uC784\uC744 \uC54C \uC218 \uC788\uB2E4. \uC774\uB7F0 \uC815\uC801 \uD398\uC774\uC9C0\uB4E4\uC744 \uBC30\uD3EC\uD574\uC8FC\uB294 \uC11C\uBE44\uC2A4\uB4E4\uC774 \uB9CE\uC744\uD150\uB370, \uB098\uAC19\uC740 \uACBD\uC6B0\uB294 github pages \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD574\uC11C \uBC30\uD3EC\uD588\uB2E4. \uAE43\uD5D9 \uACC4\uC815\uC774 \uC788\uC73C\uBA74 \uC544\uC774\uB514 1\uAC1C\uB2F9 1\uAC1C\uC758 \uD648\uD398\uC774\uC9C0\uB97C \uBB34\uB8CC\uB85C \uB9CC\uB4E4 \uC218 \uC788\uB2E4. github pages\uC5D0 \uBC30\uD3EC\uD558\uB294 \uBC29\uBC95\uC740 \uCD94\uD6C4 \uAE00\uB85C \uB2E4\uC2DC \uB2E4\uB8E8\uAE30\uB85C \uD558\uACA0\uC74C!</p>`,23),o=[e];function r(t,c,D,F,i,y){return a(),n("div",null,o)}const C=s(l,[["render",r]]);export{d as __pageData,C as default};
