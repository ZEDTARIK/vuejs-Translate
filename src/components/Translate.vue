<template lang="">
    <div class="mt-2">
        <div class="card">
            <div class="card-header">
                Zouhair ETTARAK
            </div>
            <div class="card-body">
                
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>French</th>
                            <th>English</th>
                            <th>Italy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ extract_Fr }}</td>
                            <td scope="row">{{ post.body_Eng}}</td>
                            <td scope="row">{{ post.body_It}}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div class="card-footer">
                    <button class="btn btn-success"> Add New</button>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from "vue";
export default {
      props: ["post"],
      setup(props) {
        const extract_Fr = computed(() => props.post.body_Fr.substring(0, 10) + "...");
          return {extract_Fr}
      }
};
</script>
<style lang="">
</style>