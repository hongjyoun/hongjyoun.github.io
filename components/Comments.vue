<template>
  <div ref="comment" style=" margin: 120px 0px 0px 0px;"></div>
</template>
<script>
export default {
  mounted() {
    const utterances = document.createElement("script");
    utterances.type = "text/javascript";
    utterances.async = true;
    utterances.crossorigin = "anonymous";
    utterances.src = "https://utteranc.es/client.js";
    utterances.setAttribute("issue-term", "url");
    utterances.setAttribute("theme", "github-dark");  
    utterances.setAttribute("repo", "hongjyoun/blog-comments");  // 2번
    this.$refs.comment.appendChild(utterances);
  }
};
</script>