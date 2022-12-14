<template>
    <div shop-item>
        <a :href="path" target="_blank" rel="noreferrer noopener">
            <div class="item-wrapper">
                <img :src="src" width="110" height="110"/>
                <div class="desc-wrapper">
                    <span class="desc-title">{{title}}</span>
                    <div style="display:flex; gap:4px;">
                        <span v-if="rating"> <RatingStar :rating="rating"/> </span> 
                        <span v-if="reviews" class="desc-review">후기 {{reviews}}개</span>
                    </div>             
                </div>
            </div>
        </a>
    </div>
</template>
<script>
import RatingStar from "./RatingStar.vue"
export default {
    name: 'ShopItem',
    components: { RatingStar },
    props: {
        path: { required: true },
        src: { required: true },
        title: { required: true },
        reviews: { type: String },
        rating: { type: String },
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
[shop-item] .item-wrapper .desc-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
}
[shop-item] .item-wrapper .desc-wrapper .desc-title {
    font-size: 18px;
}
[shop-item] .item-wrapper .desc-wrapper .desc-review {
    font-size: 14px;
}
</style>