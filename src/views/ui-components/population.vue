
<template lang="html">
  <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">General population ( {{ population.length }} )</h5>
            <p class="card-description">
              Naive prospects for Mummy Program
            </p>
            <div class="table-responsive">
              <table class="table center-aligned-table">
                <thead>
                  <tr>
                    <th class="border-bottom-0">Name</th>
                    <th class="border-bottom-0">Experience</th>
                    <th class="border-bottom-0">Innocence</th>
                    <th class="border-bottom-0"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="person in population"
                    :key="person._id">
                    <td>{{ person.name }}</td>
                    <td>{{ person.experience | fixDigits }}</td>
                    <td>{{ person.innocence | fixDigits }}</td>
                    <td><label class="badge badge-warning"> Waiting</label></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="js">
import MemberService from '@/services/members.service'

export default {
  name: 'population',
  data () {
    return {
      loading: true,
      population: []
    }
  },
  created () {
    MemberService.getPopulation().then(
      population => {
        this.population = population.population_data
      }).catch(_error => console.log(_error))
      .finally(() => {
        this.loading = false
      })
  },
  filters: {
    fixDigits (value) {
      return value.toFixed(3)
    }
  }
}
</script>

<style scoped lang="scss">
.tables {

}
</style>
