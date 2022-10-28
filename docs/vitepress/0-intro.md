# Vitepress로 블로그 만들기 - Vitepress 소개

## Vitepress란?
정적인 페이지(SSG)를 자동으로 생성해주는 도구, 혹은 프레임워크이다. Vue와 Vite를 개발한 Evan you가 만들었다. 이름(press)에서도 알 수 있듯이, 블로그나 기사처럼 글을 발행하는 빈도가 높은 사이트에 적합하다. 각 페이지는 markdown으로 작성하도록 되어있어서 markdown 만 조금 익히면 누구나 쉽게 글을 발행할 수 있다.

## 블로그는 SEO가 생명이라서
 블로그는 당연히 구글에 노출이 되어야 한다! 하지만 Vue나 React처럼 SPA(Single page application)로 개발한 사이트는 SEO에 노출되지 않는다. 구글에 인식되기 위해서는 NEXT나 NUXT같은 프레임워크를 사용해야 하는데, 불필요하게 너무 무거운 너낌이다. 그냥 난 가볍게 글을 쓸 수 있는 블로그를 만들고 싶을 뿐인데..뭐 쉽고 간편한거 없을까? 

 고민하던 중, 정적 사이트 생성기(Static Site Generator)라는 걸 알게됐다. 대표적으로 [VuePress](https://vuepress.vuejs.org/)와 [Jekyll](https://jekyllrb-ko.github.io/) 등이 있다. 정적 사이트란, 오직 HTML, CSS, Javascript로만 만들어진 사이트를 말한다. SEO에 최적화되려면 구글 크롤러가 홈페이지의 모든 컨텐츠를 읽을 수 있어야 한다. 하지만 SPA로 만들어진 동적 사이트의 경우, 사이트에 페이지가 로딩이 되어야 사이트 컨텐츠가 생기기 때문에 크롤러 봇이 돌아다닐때는 빈 페이지처럼 느껴지기에 '엥, 여기는 아무것도 없네' 하고 지나가버린다. 
 
 그래서 블로그 구축을 위해서는 정적 사이트로 생성하는게 필수인듯했다. 처음엔 Vuepress를 쓸까 하다가, 요즘 핫한 Vite로 만든 Vitepress를 써봤다. Vuepress를 이어받아서 거의 유사하다.
 
## Jekyll은 안예뻐서...
 처음에는 Jekyll로 만들었었다. 지금 사이트를 배포한 Github pages에서는 Jekyll을 거의 공식적으로 밀어주고 있어서 Jekyll로 블로그를 만드는 사람들이 많았다. 그래서 처음에 이걸로 홈페이지를 만들었는데, **테마가 영...안이뻤다** 😣 그리고 Ruby 언어를 기반으로 하니까 이거 또 새로 배우기가 넘나 귀찮은것(...)


::: info 공식사이트
https://vitepress.vuejs.org/
:::
