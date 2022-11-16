import DefaultTheme from 'vitepress/theme'
import Comments from '../../../components/Comments.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('Comments', Comments)
  }
}
