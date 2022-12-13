import DefaultTheme from 'vitepress/theme'
import Comments from '../../../components/Comments.vue'
import BlogItem from '../../../components/BlogItem.vue'
import ShopItem from '../../../components/ShopItem.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('Comments', Comments),
    ctx.app.component('BlogItem', BlogItem)
    ctx.app.component('ShopItem', ShopItem)
  }
}
