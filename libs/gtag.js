import GAnalytics from 'ganalytics'

let ga
const GA_TRACKING_ID = 'UA-64480565-1'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  if (!global.window) return
  if (!ga) ga = new GAnalytics(GA_TRACKING_ID)

  ga.send('pageview', { dp: url })
}
