<template>
    <b-container fluid class="pt-3 pl-1 pr-1">
        <b-media class="pr-md-2 pr-1
        border rounded-pill media-hover"
                 :class="{'useractive': isactive}"
                 style="padding: 5px;"
                 @click="itemClick">
            <template v-slot:aside>
                <b-img width="75" height="75" :alt="username" :src="imagesrc" class="m1" rounded="circle"></b-img>
            </template>
            <h5 class="mt-0 mb-0 text-nowrap" style="line-height: 75px;">
                <b>{{username}}</b>
            </h5>

        </b-media>
    </b-container>
</template>

<script>
    export default {
        name: "index",
        props: {
            username: String,
            imagesrc: String,
            isactive: Boolean
        },
        methods: {
            itemClick(ev) {
                this.$emit('itemClick', ev)
            }
        }
    }
</script>

<style scoped>
    .media-hover {
        cursor: pointer;
    }

    .media-hover:not(.useractive):hover {
        background: #e3e3e3;
    }

    .useractive {
        background: #2582ff;
    }
</style>