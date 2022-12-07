import DefaultTheme from 'vitepress/theme'
import Comments from '../../../components/Comments.vue'
import BlogList from '../../../components/BlogList.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('Comments', Comments),
    ctx.app.component('BlogList', BlogList)
  }
}
