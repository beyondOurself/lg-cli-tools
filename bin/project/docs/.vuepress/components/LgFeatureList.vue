<template>
  <div class="lg-features-component_wrap">
    <template v-for="({icon,title,content},index) in featureList" :key="index">
       <div class="feature-item" > 
       <RouterLink to="/css-standards/">

        <LgFeatureItem>
          <template #icon>
            <div>
            <Icon width="30" :icon="icon" />
            </div>
          </template>
          <template #title>
            <div>{{title}}</div>
          </template>
          <template #content>
            <div>
              {{content}}
            </div>
          </template>
        </LgFeatureItem>
    </RouterLink>

    </div>
    </template>
  </div>
</template>
<script setup>
 import featureList from "./features.config.js"

</script>

<style lang='scss' scoped>
.lg-features-component_wrap {
  display: flex;
  flex-wrap: wrap;
  .feature-item {
    flex-basis: 50%;
    margin-bottom: 20px;

    @media screen and (max-width: 769px) {
      flex-basis: 100%;
    }
  }
}
</style>