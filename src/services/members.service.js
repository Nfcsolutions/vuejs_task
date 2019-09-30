import ApiService from './api.service'

const MemberService = {
  /**
   * Login of members
  **/
  getList: async function () {
    const request = {
      url: '/members/'
    }

    try {
      const response = await ApiService.get(request.url)
      return response.data;
    } catch (error) {
      throw new Error('ERROR::', error)
    }
  },

  /**
   * List of general population
  **/
  getPopulation: async function () {
    const request = {
      url: '/generalPopulation/'
    }

    try {
      const response = await ApiService.get(request.url)
      return response.data;
    } catch (error) {
      throw new Error('ERROR::', error)
    }
  },

  /**
   * List one member detail
  **/
  getMember: async function (id) {
    const request = {
      url: `/membersList/${id}`
    }

    try {
      const response = await ApiService.get(request.url)
      return response.data
    } catch (error) {
      throw new Error('ERROR::', error)
    }
  },

  /**
   * Create new Members
  **/
  createMembers: async function (quantity) {
    console.log(quantity);
    const request = {
      //url: `/members/generate/${quantity}`
      url: `/memberSeed?count=${quantity}`
    }

    try {

      const response = await ApiService.post(request.url)
      return response.data
    } catch (error) {
      throw new Error('ERROR::', error)
    }
  },

  /**
   * Create new Members
  **/
  createPopulation: async function (quantity) {
    const request = {
      //url: `/population/generate/${quantity}`
      url: `/populationSeed?count=${quantity}`
    }

    try {
      const response = await ApiService.post(request.url)
      return response.data
    } catch (error) {
      throw new Error('ERROR::', error)
    }
  }
}

export default MemberService

export { MemberService }
