<template lang="html">




  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">




      <ul class="nav">


       <!-- <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="profile-image"> <img src="../../assets/images/mummy.png" alt="image"/> <span class="online-status online"></span> </div>
            <div class="profile-name">
              <p class="name">Ancient Mummy</p>
              <p class="designation">Owner</p>
              <div class="badge badge-teal mx-auto mt-3">Online</div>
            </div>
          </div>
        </li>-->
        <li class="nav-item li-border-bottom"><router-link class="nav-link" to="/"><i class="mdi mdi-chart-arc text-info icon-md mr-3"></i><span class="menu-title">Dashboard</span></router-link></li>
        <li class="nav-item li-border-bottom"><router-link class="nav-link" to="/members/"><i class="mdi mdi-account-check text-info icon-md mr-3"></i><span class="menu-title">Members</span></router-link></li>
        <li class="nav-item li-border-bottom"><router-link class="nav-link" to="/population/"><i class="mdi mdi-account-multiple text-info icon-md mr-3"></i><span class="menu-title">General Population</span></router-link></li>
        <li class="nav-item li-border-bottom"><router-link class="nav-link" to="/management/"><i class="mdi mdi-auto-fix text-info icon-md mr-3"></i><span class="menu-title">Management</span></router-link></li>
      </ul>
    </nav>
  </section>

</template>

<script lang="js">
export default {
  name: 'app-sidebar'
}
</script>

<style scoped lang="scss">
.app-sidebar {

}
.li-border-bottom
{
  border-bottom: 1px solid #f3f3f3;
}
</style>
