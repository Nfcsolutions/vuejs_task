<template lang="html">

  <section class="typography">
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
           
            <h4 class="card-title">{{member.name}} <label v-bind:class="{'badge badge-danger': member.is_inactive, 'badge badge-teal': !member.is_inactive }">{{ ( member.is_inactive) ? 'Inactive' : 'Active' }}</label></h4>
             <h5 class="card-title text-muted">Code: {{member.code}} </h5>
            <p class="card-description">
              &nbsp;
            </p>
            <div class="row">
              <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Information</h4>
                    <ul>
                      <li class="font-weight-bold">Current MM: ${{ total }}</li>
                      <li class="font-weight-bold">My Members: {{ my_members }}</li>
                      <li>Charisma: {{member.charisma | fixDigits }}</li>
                      <li>Experience: {{member.experience | fixDigits  }}</li>
                      <li>Innocence: {{member.innocence | fixDigits }}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <blockquote class="blockquote blockquote-primary">
                    <address class="text-primary">
                      <p class="font-weight-bold">
                        E-mail
                      </p>
                      <p class="mb-2">
                        member@mummyprogram.com
                      </p>
                      <p class="font-weight-bold">
                        Web Address
                      </p>
                      <p>
                        www.fromwolf.com
                      </p>
                    </address>
                    <footer class="blockquote-footer">Go ahead and became rich with <cite title="Source Title">Mummy Program</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Bank History</h4>
            <p class="card-description">
              &nbsp;
            </p>
            <div class="table-responsive">
             <table class="table center-aligned-table">
                <thead>
                  <tr>
                    <th class="border-bottom-0">ID Transaction</th>
                    <th class="border-bottom-0">Movement</th>
                    <th class="border-bottom-0"></th>
                    <th class="border-bottom-0">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="transaction in member.transactions"
                    :key="transaction.transaction_id">
                    <td>{{ transaction.transaction_id }}</td>
                    <td>$ {{ transaction.amount }}</td>
                    <td><label v-bind:class="{'badge badge-danger': transaction.amount &lt; 0, 'badge badge-teal': transaction.amount &gt; 0}">{{transaction.amount &lt; 0 ? 'Paid' : 'Received'}}</label></td>
                    <td>{{ transaction.created_on }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">My Invited Members</h4>
            <p class="card-description">
              &nbsp;{{member.length}}
            </p>
            <div class="table-responsive">
             <table class="table center-aligned-table" v-if="member.members.length > 0">
                <thead>
                  <tr>
                    <th class="border-bottom-0">ID</th>
                    <th class="border-bottom-0">Name</th>
                  <!--  <th class="border-bottom-0">Member Code</th>-->
                    <th class="border-bottom-0">Charisma</th>
                    <th class="border-bottom-0">Experience</th>
                    <th class="border-bottom-0">Innocence</th>
                    <th class="border-bottom-0">Max Weeks</th>
                    <th class="border-bottom-0">Status</th>
                    <th class="border-bottom-0"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="invited_member in member.members"
                    :key="invited_member._id">
                    <td>{{ invited_member._id }}</td>
                    <td>{{ invited_member.name }}</td>
                  <!-- <td>{{ invited_member.code }}</td>-->
                    <td>{{ invited_member.charisma | fixDigits }}</td>
                    <td>{{ invited_member.experience | fixDigits }}</td>
                    <td>{{ invited_member.innocence | fixDigits }}</td>
                    <td>{{ invited_member.max_weeks }}</td>
                    <td><label v-bind:class="{'badge badge-danger': invited_member.status, 'badge badge-teal': !invited_member.status }">{{ ( invited_member.status) ? 'Inactive' : 'Active' }}</label></td>
                    <td><b-button variant="primary" v-on:click="findMember(invited_member._id)"><i class="mdi mdi-eye"></i>View</b-button></td>
                  </tr>
                </tbody>
              </table>
              <div v-if="member.length == 0">
                <h5><i class="mdi mdi-heart-broken icon-md text-danger"></i>&nbsp;No members in my list </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import MemberService from '@/services/members.service'

export default {
  name: 'memberDetail',
  data () {
    return {
      loading: true,
      member: {},
      my_members: 0,
      total: 0
    }
  },
  created () {
    debugger;
    let _id = this.$route.params.id
    this.findMember(_id)
  },
  methods: {
    findMember (_id) {
      this.clear()
      this.$router.push({ name: 'memberdetail', params: { id: _id } })
      MemberService.getMember(_id).then(
        member => {
          debugger;
           console.log(member);
            console.log(member.members);
          this.member = member

         // this.my_members = this.member.length
        }).catch(_error => console.log(_error))
        .finally(() => {
          this.loading = false
        })
    },
    clear () {
      this.my_members = 0
      this.total = 0
    }
  },
  filters: {
    fixDigits (value) {
      return (value !== undefined) ? value.toFixed(3) : value
    }
  }
}
</script>

<style scoped lang="scss">
.typography {
}
</style>
