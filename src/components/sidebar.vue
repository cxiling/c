<template>
    <!-- 侧边栏 模板 -->
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <div class="user-panel">
        <div class="pull-left image">
          <img src="http://192.168.9.230/admin/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>294143</p>
          <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
        </div>
      </div>

      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="搜索...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>

      <ul class="sidebar-menu">
        <li class="header">导航菜单</li>
        <li><router-link to="/login"><i class="fa fa-link"></i> <span>首页</span></router-link></li>
        <!-- <li><a href="#"  @click="navTo('page1')"><i class="fa fa-link"></i> <span>表单</span></a></li> -->

        <li><router-link to="/page1"><i class="fa fa-link"></i> <span>页面1</span></router-link></li>
        <!-- <li class="treeview">
          <a href="#"><i class="fa fa-link"></i> 表格<span></span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="table.html">bootstrapTables</a></li>
            <li><a href="datatable.html">dataTable</a></li>
            <li><a href="treetable.html">treeTable</a></li>
          </ul>
        </li> -->

      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
    module.exports = {
    methods: {
      navTo(pageName){
        this.$router.push(pageName);
      }
    },
    created() {
    },
    mounted() {
    }
}
</script>

<style scoped lang='less'>
</style>
