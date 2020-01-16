<template>

  <div class="container-fluid">
    <div class="row container-row">
      <div class="sidebar col-md-2 d-none-sm">

      </div>
      <div class="content">

      </div>
    </div>
  </div>

</template>

<script>

  import axios from 'axios'
  export default {
    methods: {
      loadSources() {
        this.isLoading = true
        axios
          .get('/news')
          .then(({ data: { sources = [] } }) => {
            console.log(sources)
          })
          .finally(() => {
            this.isLoading = false
          })
      }
    },
    mounted() {
      this.loadSources()
    },
    data: () => {}
  }

</script>

<style>

  .container-row {
    flex-direction: row;
    min-height: 100vh;
  }
  .sidebar {
    background-color: #333333;
  }
  .content {
    background-color: #f2f2f2;
    flex: 1;
  }

</style>
