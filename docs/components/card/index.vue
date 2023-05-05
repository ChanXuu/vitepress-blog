<template>
  <div class="card-list">
    <CardItem
      v-for="(item, index) in list"
      key="index"
      :icon="list.icon"
      :title="list.title"
      :desc="list.desc"
    />
    <div class="no-data-info">
      <img class="no-data-img" v-if="!list.length" :src="noData" alt="" />
      <p class="no-data-tips">暂无数据</p>
    </div>
  </div>
</template>

<script setup>
import CardItem from "./cardItem.vue";
import noData from "../../assets/noData.png";
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.card-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 20%;
}
.card-list > div {
  margin: 32px;
}
.no-data-info {
  position: relative;
  left: 50%;
  margin-top: 15% !important;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(60, 60, 67);
  font-weight: 600;
}

.dark .no-data-info {
  color: rgba(255, 255, 245, 0.86) !important;
}
.no-data-img {
  width: 68px;
  margin-bottom: 8px;
}
</style>
