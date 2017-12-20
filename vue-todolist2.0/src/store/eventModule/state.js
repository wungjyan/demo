import * as func from '../utils'

let state = func.local.get() || {
  event: [],
  count:0,
}

export default state


