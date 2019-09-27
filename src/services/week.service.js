import ApiService from './api.service'

const WeekService = {
  /**
   * @return a list with all weeks
  **/
  getList: async function () {
    const request = {
      url: 'weeksList/'
    }

    try {
      const response = await ApiService.get(request.url)
      return response.data.data
    } catch (error) {
      throw new Error('ERROR::', error)
    }
  },

  /**
   * @return Run simulation
  **/
  simulateWeek: async function (_seconds, _week) {

    const request = {
      url: `scheduleCron/start?seconds=${_seconds}&week_no=${_week}`

    }
    try {
      //const response = await ApiService.post(request.url, {seconds: request.seconds, week: request.week})
      const response = await ApiService(request.url)
      console.log(response);
      return response.data
    } catch (error) {
      throw new Error('ERROR::', error)
    }
  },

  /**
   * @return Run simulation
  **/
  simulateStop: async function () {
    const request = {
      url: 'scheduleCron/stop',
    }
    console.log(request)
    try {
      const response = await ApiService.get(request.url)
      return response.data
    } catch (error) {
      throw new Error('ERROR::', error)
    }
  }
}

export default WeekService

export { WeekService }
