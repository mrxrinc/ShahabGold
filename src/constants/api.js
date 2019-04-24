// APP wide Constants

export const DEBUG = false
export const Version = 1
// export const ContentType = 'application/json;charset=UTF-8'

export const URL = DEBUG ? 
  'https://chilivery.net/restaurant-mobile-api/v2/' : // DEVELOPMENT
  'https://chilivery.com/restaurant-mobile-api/v2/' // PRODUCTION

export const Auth = DEBUG ? 
  'Basic Y2hpbGlkZXY6d2VsY29tZXRvY2hpbGlkZXY=' : // DEVELOPMENT
  null // PRODUCTION

export const imageHeader = DEBUG ? 
  { Authorization: 'Basic Y2hpbGlkZXY6d2VsY29tZXRvY2hpbGlkZXY=' } : // DEVELOPMENT
  { Authorization: 'Basic yeeeehhhaaaaa_Cowboy:))))' } // PRODUCTION

export const INIT = {
  platform: 'ios',
  build: 1,
  device_id: '100',
  device: 'iPhone',
  c_version: 1
}

// NEUTRALIZE CONSOLE.LOG() (disabling console.log() for production)
if (!DEBUG) {
  console.log = () => {}
  console.info = () => {}
  console.debug = () => {}
}
