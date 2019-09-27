import ApiService from './api.service'

const DashboardService = {
  /**
   * Login the user and store the access token to TokenService.
   * @returns access_token
   * @throws AuthenticationError
  **/
  getCurrentStatus: async function (email, password) {
    const request = {
      url: '/dashboard/'
    }

    try {
      const response = await ApiService.get(request.url)
      return response.data
    } catch (error) {
      throw new Error('ERROR::', error)
    }
  }
}

export default DashboardService

export { DashboardService }
