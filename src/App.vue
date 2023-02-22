<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ count }}</p>
    <button @click="count ++">추가</button>
    <HomeComponent></HomeComponent>
    <Appstatus></Appstatus>
  </div>   
</template>

<script>

import HomeComponent from './Home'

export default {
  components: {
    HomeComponent
  },
  data () { 
    return {
      title: "Hello",
      count: 1
    }
  }
}
</script>
