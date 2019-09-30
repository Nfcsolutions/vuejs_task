<template lang="html">
  <section class="dashboard">
    <div class="row">
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-currency-btc text-teal icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Mummy Revenue</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0"> ${{information.mummy_money_earned}}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <i class="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> & growing
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-account-multiple text-warning icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Population</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{information.population_cout}}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <i class="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Potential candidates
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-account-check text-teal icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Total Members</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{information.members_count}}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <i class="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> {{information.inactive_members}} Inactive members
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-chart-line text-info icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right"> <i class="mdi mdi-account-plus mr-1" aria-hidden="true"></i>{{information.new_members}} New Members</p>
                <p class="card-text text-right"> <i class="mdi mdi-account-minus mr-1" aria-hidden="true"></i>{{information.members_leaving}} Members Leaving</p>
              </div>
            </div>
            <p class="text-muted mt-3">
              <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> People movements
            </p>
          </div>
        </div>
      </div>
    </div>
   <!-- <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Average Mummy Money</h5>
            <div class="table-responsive">
              <table class="table center-aligned-table">
                <thead>
                  <tr>
                    <th class="border-bottom-0">Investor</th>
                    <th class="border-bottom-0">Average Money</th>
                    <th class="border-bottom-0"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="member in information.avg_mm_member"
                    :key="member.name">
                    <td>{{ member.name}}</td>
                    <td>${{ member.avg_mm | fixDigits}}</td>
                    <td v-if=" member.avg_mm > 0"><i class="mdi mdi-emoticon-cool icon-md" aria-hidden="true"></i></td>
                    <td v-if=" member.avg_mm == 0"><i class="mdi mdi-emoticon-neutral icon-md" aria-hidden="true"></i></td>
                    <td v-if=" member.avg_mm < 0"><i class="mdi mdi-emoticon-poop icon-md" aria-hidden="true"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>-->

  </section>
</template>

<script lang="js">
import DashboardService from '@/services/dashboard.service'

export default {
  name: 'dashboard',
  data () {
    return {
      loading: true,
      information: {}
    }
  },
  created () {
    DashboardService.getCurrentStatus().then(
      info => {
        this.information = info
      }).catch(_error => console.log(_error))
      .finally(() => {
        this.loading = false
      })
  },
  filters: {
    fixDigits (value) {
      return (value !== undefined) ? value.toFixed(1) : 0
    }
  }
}
</script>

<style scoped lang="scss">
</style>
