<template>
  <div class="md-card-exp show-border">
    <div class="card-content-exp">
      <slot></slot>
    </div>
    <div v-if="image" class="card-image-exp">
      <img :src="$withBase(image)" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['image']
};
</script>

<style lang="stylus">
@import './styles/config.styl';

.md-card-exp
  background-color $frontColor
  margin-top 1em
  min-height 130px
  display flex
  flex-direction row
  align-items: stretch
  .card-image-exp
    display flex
    align-items center
    padding 0.5rem
    img 
      max-width 75px
      max-height 75px
      height 75px
      /*border: 1px solid #eee;*/
      /*border-radius 0.2rem*/
      object-fit cover
  .card-content-exp
    padding 0.5rem
    flex-grow 1
    p
      line-height normal
      -webkit-margin-before 0em
      -webkit-margin-after 0.5em
    blockquote 
      font-size 1rem

.md-card-exp.show-border
  border 2px solid #eee
  border-radius 0.5rem
  box-shadow 0 5px 15px -5px rgba(0,0,0,.1)
  padding 0.5rem

@media (max-width: $MQMobileNarrow)
  .md-card-exp
    display flex
    flex-direction column
    margin 1rem -0.5rem
    padding 0.5rem
    box-sizing border-box
    .card-image-exp
      flex-grow 1
      align-items: stretch
      img 
        width 100%
        max-width 400px
    .card-content-exp
      pre
        margin 0
        border-radius 6px

</style>