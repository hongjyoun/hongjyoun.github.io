<template>
    <div blog-item>
        <span>{{ createdDate }} </span>
        <a :href="`articles/${filename}`"> <slot /> </a>
    </div>
</template>
<script>
export default {
    name: 'BlogItem',
    props: {
        filename: { required: true },
        title: { required: true }
    },
    computed: {
        createdDate() {
            const fileNames = this.filename && this.filename.split('-')
            console.log(fileNames[0])
            return `${fileNames[0]}-${fileNames[1]}-${fileNames[2]}`
        }
    },
    data() {
		return {
		}
	},
};
</script>
<style scoped>
[blog-item] {
    display: flex;
    gap: 20px;
    padding: 20px;
    border: 1px solid #3FAA7A;
    border-radius: 10px;
}
</style>