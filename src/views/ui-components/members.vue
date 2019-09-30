
<template lang="html">
  <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">List of members  ( {{ members.length }} )</h5>
            <p class="card-description">
              People who have joined program
            </p>
            <div class="table-responsive">
              <table class="table center-aligned-table">
                <thead>
                  <tr>
                    <th class="border-bottom-0">ID</th>
                    <th class="border-bottom-0">Name</th>
                    <th class="border-bottom-0">Charisma</th>
                    <th class="border-bottom-0">Experience</th>
                    <th class="border-bottom-0">Innocence</th>
                    <th class="border-bottom-0">My Members</th>
                    <th class="border-bottom-0">Max Weeks</th>
                    <th class="border-bottom-0">Status</th>
                    <th class="border-bottom-0"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="member in members"
                    :key="member._id">
                    <td>{{ member._id }}</td>
                    <td>{{ member.name }}</td>
                    <td>{{ member.charisma | fixDigits }}</td>
                    <td>{{ member.experience | fixDigits }}</td>
                    <td> {{ member.innocence  }} </td>
                    <td class="pr-0 text-center" v-if="member.members_count >= 5"><b-badge pill variant="outline-primary">{{ member.members_count }}</b-badge></td>
                    <td class="pr-0 text-center" v-if="member.members_count == 0"><b-badge pill variant="outline-danger">{{ member.members_count }}</b-badge></td>
                    <td class="pr-0 text-center" v-if="member.members_count > 0 && member.members_count < 5"><b-badge pill variant="outline-warning">{{ member.members_count}}</b-badge></td>
                    <td>{{ member.max_weeks }}</td>
                    <td><label v-bind:class="{'badge badge-danger': member.status, 'badge badge-teal': !member.status }">{{ ( member.status) ? 'Inactive' : 'Active' }}</label></td>
                    <td><router-link class="nav-link" :to="`/members/${member._id}`"><b-button variant="primary"><i class="mdi mdi-eye"></i>View</b-button></router-link></td>
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
  name: 'card',
  data () {
    return {
      loading: true,
      members: []
    }
  },
  created () {
    MemberService.getList().then(
      members => {
        this.members = members.data
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
