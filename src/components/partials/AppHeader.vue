<template lang="html">
  <b-navbar class="fixed-top" toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center header-backcolor">
      <a class="navbar-brand brand-logo" href="/"><img src="../../assets/images/logo.svg" alt="logo"/></a>
      <a class="navbar-brand brand-logo-mini" href="/"><img src="../../assets/images/logo-mini.svg" alt="logo"/></a>
    </div>
    <b-collapse is-nav id="nav_collapse" class="nav_collapse_backcolor">
      <b-navbar-nav class="header-links">
        <b-nav-item href="#"><i class="mdi mdi-calendar"></i>Current Week: {{ current_week }}</b-nav-item>
        <b-nav-item href="#" v-if="!running" v-on:click="simulation"><i class="mdi mdi-flash"></i>Simulate</b-nav-item>

        <b-nav-item href="#" v-if="running" v-on:click="stop"><i class="mdi mdi-flash"></i>Stop Simulation</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-form-select v-model="set_seconds" :options="seconds" :select-size="2" class="margin-top"/>&nbsp;&nbsp;&nbsp;
        <b-form-select v-model="current_week" :options="weeks" :select-size="4" class="margin-top"/>
        <b-nav-item href="#">
          <b-btn v-b-modal.modalsm variant="danger">Escape with money!<i class="mdi mdi-rocket"></i></b-btn>
          <b-modal id="modalsm" title="Oh no no no!" size="sm" class="black">
            <p class="my-4 black">Sure you want to steal everybody?</p>
          </b-modal>
        </b-nav-item>
           <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
  
          <template v-slot:button-content>

              
                <img src="../../assets/images/mummy.png" style="width: 50px;" alt="image"/> 
                <span class="hidden-xs"></span>
            
           
          </template>
          <b-dropdown-item href="#">  Ancient Mummy -Owner</b-dropdown-item>
          <b-dropdown-item href="#"><i class="mdi mdi-account li"></i><span class="menu-title">Profile</span></b-dropdown-item>
          <b-dropdown-item href="#"><i class="mdi mdi-settings li"></i><span class="menu-title">Settings</span></b-dropdown-item>
          <b-dropdown-item href="#"><i class="mdi mdi-power li"></i><span class="menu-title">Logout</span></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
       
                     
          
       
    </b-collapse>
  </b-navbar>
</template>

<script lang="js">
import WeekService from '@/services/week.service'

export default {
  name: 'app-header',
  data () {
    return {
      loading: true,
      weeks: {},
      set_seconds: null,
      seconds: [],
      current_week: null,
      running: false
    }
  },
  created () {

    for (let i = 1; i < 60; i++) {
      this.seconds.push({value: i, text: `Run every ${i} seconds`})
    }
    WeekService.getList().then(
      weeks => {
        this.weeks = weeks.map(week => {
          if (week.is_current) {
            this.current_week = week.week_no
          }
          return {value: week.week_no, text: `Week ${week.week_no} &nbsp; Range: ${week.from_to_dates}`}
        })
      }).catch(_error => console.log(_error))
      .finally(() => {
        this.loading = false
      })
      
  },
  methods: {
    simulation () {
      if (this.set_seconds === null || this.current_week === null) {
        alert('Must set seconds and week to run simulation')
        return false
      }
      this.running = true
      WeekService.simulateWeek(this.set_seconds, this.current_week).then(
        weeks => {
          this.weeks = weeks.map(week => {
            if (week.is_current) {
              this.current_week = week.week_no
            }
            return {value: week.week_number, text: `Week ${week.week_no} &nbsp; Range: ${week.from_to_dates}`}
          })
        }).catch(_error => console.log(_error))
        .finally(() => {
          this.loading = false
        })
    },

    stop () {
      WeekService.simulateStop().then(
        stop => {
          this.running = false
          alert(stop.message)
        }).catch(_error => console.log(_error))
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style scoped lang="scss">


.black {
  color: black;
}

.margin-top {
  margin-top: 15px;
}
.li {
  margin-right: 0.5em;
}
.nav_collapse_backcolor
{
  background-color: #3c8dbc;
}
.header-backcolor
{
  background-color: #367fa9;
}
</style>
