<template lang="html">

  <section class="typography">
    <div class="row">
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Create new Investors</h4>
            <p class="card-description">
              This option create members directly added to <code>&lt;Mummy&gt;</code>
            </p>
            <form class="forms-sample">
                <b-form-group horizontal label="Quantity"  label-for="input">
                  <b-form-input type="text" v-model="members_quantity" id="members_quantity" placeholder="Quantity of members"></b-form-input>
                </b-form-group>
                <b-button type="button" variant="primary" class="mr-2" v-on:click="createMembers()">Create!</b-button>
                <b-button variant="light">Cancel</b-button>
            </form>
            <p class="card-description">
              &nbsp;
            </p>
            <b-alert variant="success" dismissible :show="showInvestorsAlert" @dismissed="showInvestorsAlert=false">
              Investors created succesfully!
            </b-alert>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Create new General Population</h4>
            <p class="card-description">
              This option create naive prospects into <code>&lt;General Population&gt;</code>
            </p>
            <form class="forms-sample">
                <b-form-group horizontal label="Quantity"  label-for="input">
                  <b-form-input type="text" v-model="naives_quantity" id="naives_quantity" placeholder="Quantity of naives"></b-form-input>
                </b-form-group>
                <b-button type="button" variant="primary" class="mr-2" v-on:click="createPopulation()">Create!</b-button>
                <b-button variant="light">Cancel</b-button>
            </form>
            <p class="card-description">
              &nbsp;
            </p>
            <b-alert variant="success" dismissible :show="showPopulationAlert" @dismissed="showPopulationAlert=false">
              Naive crowd created succesfully!
            </b-alert>
          </div>
        </div>
      </div>
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Credits</h4>
            <p class="card-description">
              Developer <code>&lt;Gustavo Castillo&gt;</code>
            </p>
            <blockquote class="blockquote">
              <p class="mb-0">Thanks to Vue bootstrap based template and coffe for being with me lot of hours</p>
            </blockquote>
          </div>
          <div class="card-body">
            <blockquote class="blockquote blockquote-primary">
              <p>My favorite quotation in life:</p>
              <footer class="blockquote-footer">If i can go through this <cite title="Source Title">I can go through anything!</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import MemberService from '@/services/members.service'

export default {
  name: 'memberdetail',
  data () {
    return {
      loading: true,
      members_quantity: 0,
      naives_quantity: 0,
      showPopulationAlert: false,
      showInvestorsAlert: false
    }
  },

  methods: {
    createMembers () {
      if (this.members_quantity < 1) {
        alert('Must send at least 1')
        return false
      }
      MemberService.createMembers(this.members_quantity).then(
        member => {
          this.showInvestorsAlert = true
          this.members_quantity = 0
        }).catch(_error => console.log(_error))
        .finally(() => {
          this.loading = false
        })
    },
    createPopulation () {
      if (this.naives_quantity < 1) {
        alert('Must send at least 1')
        return false
      }

      MemberService.createPopulation(this.naives_quantity).then(
        member => {
          this.showPopulationAlert = true
          this.naives_quantity = 0
        }).catch(_error => console.log(_error))
        .finally(() => {
          this.loading = false
        })
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
