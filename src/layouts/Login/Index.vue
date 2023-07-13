<script>
import EducationIcon from '@/components/icons/EducationIcon.vue'
export default {
  components: {
    EducationIcon
  }
}
</script>

<template>
  <div class="wrapper h-screen">
    <div class="p-4">
      <div class="relative">
        <div class="h-64 w-48 bg-[#E4752B] rounded-tl-3xl rounded-br-3xl absolute top-12"></div>
        <div class="h-64 w-48 bg-red-600 rounded-tl-3xl rounded-br-3xl absolute top-6"></div>
        <div
          class="bendiciones h-64 w-48 bg-[#DFDFDF] rounded-tl-3xl rounded-br-3xl absolute"
        ></div>
      </div>
    </div>
    <div></div>
    <img class="h-full object-contain fixed right-0" src="@/assets/icons/group.svg" alt="" />
  </div>
</template>
<style>
.wrapper {
  background: linear-gradient(90deg, #0f3971 0%, #fff 100%);
}
</style>
