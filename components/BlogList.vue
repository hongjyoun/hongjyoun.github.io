<template>
    <div blog-list>
        <BlogItem filename="2022-11-11-flutter-setup-for-mac"> Mac 환경에 Flutter 개발 세팅하기 </BlogItem>
        <BlogItem filename="2022-10-15-vitepress-make-project"> Vitepress 프로젝트 생성하기 </BlogItem>
        <BlogItem filename="2022-10-01-vitepress-intro"> Vitepress로 블로그 만들기 - Vitepress 소개 </BlogItem>
        <BlogItem filename="2022-09-30-notionapi"> 노션 Notion api로 블로그 개발하기 - Intro </BlogItem>
            
        
    </div>
</template>
<script>
import BlogItem from './BlogItem.vue'
export default {
    name: 'BlogList',
    components: { BlogItem },
    data() {
		return {
            articles: [],
		}
	},
};
</script>
<style scoped>
[blog-list] {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap:10px;
}
</style>