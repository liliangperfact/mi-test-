<template>
  <div>
    <HomeBar></HomeBar>
    <Banner></Banner>
    <Card1></Card1>
    <AshContent></AshContent>
  </div>
</template>
<script>
import Banner from "./Banner";
import Card1 from "./Card1";
import HomeBar from "@/components/HomeBar";
import AshContent from "./AshContent";
export default {
  name: "Home",
  props: {},
  components: {
    Banner,
    Card1,
    HomeBar,
    AshContent
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less"	scoped>
</style>