<template>
    <div>
        <nuxt-content :document="doc" class="prose dark:prose-invert max-w-none prose-h1:mb-2 prose-h1:text-4xl prose-h2:text-2xl prose-h2:mb-1 prose-p:mb-1 prose-blockquote:font-normal prose-img:rounded-xl" />
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const doc = await $content('docs', params.slug).fetch();
        return { doc }
    }
}
</script>