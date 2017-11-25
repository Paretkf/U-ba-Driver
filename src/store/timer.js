import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebase from 'firebase'

let db = firebase.database()
let timerRef = db.ref('timer/sec')

export default {
  state: {
    sec: 0,
    money: 0
  },
  getters: {
    sec: state => state.sec,
    money: state => state.money
  },
  mutations: {
    ...firebaseMutations,
    updateCost (state, payload) {
      state.sec = payload.Sec
      state.money = payload.cost
    }
  },
  actions: {
    async setTime (store, payload) {
      store.commit('updateCost', payload)
    },
    bindtimerRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
      bindFirebaseRef('timer', timerRef)
    }),
    unbindtimerRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
      unbindFirebaseRef('timer')
    })
  }
}
