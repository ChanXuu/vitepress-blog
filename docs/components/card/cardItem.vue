<template>
  <div class="card">
    <div
      class="card-img"
      :style="{
        background: `url('${
          props.icon !== null ? props.icon : noImage
        }') 100% 100% / cover no-repeat`,
      }"
    ></div>
    <div class="card-info">
      <p class="title">{{ props.title }}</p>
      <p class="desc" :title="props.desc">{{ props.desc }}</p>
    </div>
  </div>
</template>

<script setup>
import noImage from "../../assets/image.png";
const props = defineProps({
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
  },
  icon: {
    type: String,
    default: null,
  },
});
</script>

<style scoped>
.card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  height: 308px;
}
.card:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.card-img {
  width: 100%;
  height: 65%;
}

.card-info {
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  user-select: none;
}

.card-info p {
  margin: 0;
}

.card-info .title {
  font-size: 16px;
  color: #303133;
}

.card-info .desc {
  font-size: 13px;
  color: #999;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
