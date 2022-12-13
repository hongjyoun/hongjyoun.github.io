<template>
    <div shop-item>
        <a :href="path" target="_blank" rel="noreferrer noopener">
            <div class="item-wrapper">
                <img :src="src" width="110" height="110"/>
                <span>{{title}}</span>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    name: 'ShopItem',
    props: {
        path: { required: true },
        src: { required: true },
        title: { required: true },
    },
    data() {
		return {
		}
	},
};
</script>
<style>
[shop-item] {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
    border: 1px solid #c1a548;
    background-color: #87642a;
    border-radius: 10px;
    margin-top: 10px;
}

[shop-item] a {
    color: #ffffff;
    width: 100%
}
[shop-item] .item-wrapper {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
}
[shop-item] .item-wrapper img {
    border-radius: 10px;
}
[shop-item] .item-wrapper span {
    font-size: 18px;
}
</style>