<template lang="">
    <div class="col-md-12" v-for="post in posts" :key="post.id">
        <Translate :post=post  />
    </div>

</template>
<script>
import Translate from "../components/Translate";
import GetTranslate from "../composable/GetTranslate";
export default {
  components: {
    Translate
  },
  setup() {
    const { posts, error, load } = GetTranslate();
    load();
    return { posts, error };
  },
};
</script>
<style lang="">
</style>