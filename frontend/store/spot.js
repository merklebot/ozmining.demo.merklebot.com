import {defineStore} from 'pinia'

export const useSpot = defineStore('spotData', {
  state: () => {
    return {
      status: "unknown",
      cameraImages: {},
      battery: 0,
      location: "start",
      gauges: 0
    }
  },
  actions: {
    setSpotAnswer(data) {
      this.battery = data.battery
      this.cameraImages = data.camera_images
    }
  }
})
