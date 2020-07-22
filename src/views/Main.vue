<template>
  <div class="Home">
    <div id="maintop">
      <maintop></maintop>
    </div>
    <div>
<mainsideleft></mainsideleft>
    </div>
    <div>
<maincontent></maincontent>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import mainsideleft from '@/components/main-side-left.vue';
import maintop from '@/components/main-top.vue'
import maincontent from '@/components/main-content.vue'
export default {
  name: "Home",
  components: {
  mainsideleft,
  maintop,
  maincontent
  }
};
</script>

