<template>
  <div>
    <!-- Main Header -->
    <m-header></m-header>

    <sidebar></sidebar>

    <!-- ./wrapper -->

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <section class="content-header">
          <h1>
           基础数据
          <small>Java Bean</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> 位置</a></li>
            <li class="active">基础数据</li>
          </ol>
      </section>

      <!-- Main content -->
      <section class="content">
      
        <!-- Your Page Content Here -->
      </section>

      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <!-- <m-footer></m-footer> -->
    <control-sidebar></control-sidebar>
    <div class="control-sidebar-bg"></div>
  <div>
</template>

<script>
    import sidebar from '../components/sidebar.vue'
    import mHeader from '../components/header.vue'
    import mFooter from '../components/footer.vue'
    import controlSidebar from '../components/control-sidebar.vue'

    module.exports = {

    components: {
        'sidebar': sidebar,
        'm-header': mHeader,
        'm-footer':mFooter,
        'control-sidebar':controlSidebar
    },
    methods: {
    },
    created() {
    },
    mounted() {
    }
}
</script>

<style scoped lang='less'>
</style>
