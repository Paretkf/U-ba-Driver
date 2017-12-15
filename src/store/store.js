import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebase from 'firebase'
import axios from 'axios'
let db = firebase.database()
let driverRef = db.ref('driver')
let callRef = db.ref('call')

export default {
  state: {
    sec: 0,
    money: 0,
    driver: {},
    lat: 0,
    long: 0,
    caller: {},
    caller2: {},
    wait: 'wait'
  },
  getters: {
    sec: state => state.sec,
    money: state => state.money,
    driver: state => state.driver,
    lat: state => state.lat,
    long: state => state.long,
    caller: state => state.caller,
    wait: state => state.wait
  },
  mutations: {
    ...firebaseMutations,
    updateCost (state, payload) {
      state.sec = payload.Sec
      state.money = payload.cost
    },
    updateCoods (state, payload) {
      state.long = payload.long
      state.lat = payload.lat
    },
    setCaller (state) {
      // callRef.once('child_added', snapshot => {
      //   state.caller = snapshot
      // })
      axios.get('https://u-ba-d180c.firebaseio.com/call.json').then((res) => {
        // state.user = res.data
        let arr = []
        for (var index in res.data) {
          if (res.data.hasOwnProperty(index)) {
            arr.push({
              ...res.data[index],
              firebaseID: index
            })
          }
        }
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].state === 'wait') {
            state.caller = arr[i]
            state.wait = 'non'
            break
          }
          if (arr[i].state === 'driving') {
            state.caller = arr[i]
            state.wait = 'non'
            break
          } else {
            state.wait = 'wait'
            state.caller = {}
          }
        }
      })
    }
  },
  actions: {
    async setTime (store, payload) {
      store.commit('updateCost', payload)
    },
    async setCoods (store, payload) {
      store.commit('updateCoods', payload)
    },
    setCaller (store, payload) {
      store.commit('setCaller')
    },
    updateState (store, payload) {
      callRef.child(payload.ID + '/state').set(payload.state)
    },
    updateDriver (store, payload) {
      callRef.child(payload.ID + '/driver').set(payload.driver)
    },
    newDriver (store, payload) {
      driverRef.push(payload)
    },
    binddriverRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
      bindFirebaseRef('driver', driverRef)
    }),
    unbinddriverRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
      unbindFirebaseRef('driver')
    }),
    bindcallRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
      bindFirebaseRef('test', callRef)
    }),
    unbindcallRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
      unbindFirebaseRef('test')
    })
  }
}
