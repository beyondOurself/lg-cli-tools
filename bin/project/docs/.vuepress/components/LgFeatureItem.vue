<template>
  <div class="lg-feature-item_wrap">
    <div class="feature-item_entity">
      <div class="feature-item__icon">
          <slot name="icon">
          </slot>
      </div>
      <div class="feature-item_right">
          <div class="feature-item__title">
              <slot name="title"></slot>
              </div>
          <div class="feature-item__content">
              <slot name="content"></slot>
          </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.feature-item_entity{
    display: flex;
}
.feature-item__icon{ 
    color: var(--lg-main);
    font-weight: bold;
}
.feature-item__title{
    font-size: 1.5em;
    font-weight: bold;
    color: #7c8fa3;
}
.feature-item_right{
    margin-left: 10px;
}
.feature-item__content{
    padding: 5px;
    color: #333;
}
</style>