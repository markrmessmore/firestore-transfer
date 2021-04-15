import Vue    from 'vue'
import Vuex   from 'vuex'
import router from '@/router'

// LIBRARIES
import firebase from "firebase/app"
import "firebase/firestore"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: {
      msg     : "",
      status  : false
    }, 
    logs: [],
    source: []
  },
  mutations: {
    setLoading(state, payload){
      state.loading = payload
    },
    setLog(state, payload){
      state.logs = payload
    },
    setSource(state, payload){
      state.source  = payload
    }
  },
  actions: {
    getData({commit}, payload){
      commit('setLoading', {msg: "Fetching Data...", status: true})
      let appData = {
        apiKey    : payload.apiKey,
        appId     : payload.appId,
        projectId : payload.projectId
      }
      let source = firebase.initializeApp(appData, payload.appId)
      source.firestore().collection(payload.collection).get()
      .then(allDocs => {
        let sourceDocs = []
        allDocs.forEach(doc => {
          let docData = doc.data()
          docData.id = doc.id
          sourceDocs.push(docData)
        })
        commit('setSource', sourceDocs)
        router.push('/Destination')
        commit('setLoading', {msg: "", status: false})
      })
      .catch(err => {
        commit('setLoading', {msg: "", status: false})
        console.log(err)
      })
    },
    setData({commit, state}, payload){
      commit('setLoading', {msg: "Writing data...", status: true})
      let appData = {
        apiKey    : payload.apiKey,
        appId     : payload.appId,
        projectId : payload.projectId
      }
      let destination = firebase.initializeApp(appData, payload.appId)

      let finish      = function(logs){
        commit('setLog', logs)
        commit('setLoading', {msg: "", status: false})
        router.push('/Result')
      }

      if (payload.subCollection == ''){
        //IF THERE IS NO DOC SPECIFIED
        if (payload.doc == ''){
          let logs = []
          let path = destination.firestore().collection(payload.path)
          state.source.forEach(item => {
            path.doc(item.id).set(item)
            .then(() => {
              let msg = `Record ${item.id} written to ${destination.name}`
              logs.push(msg)
              console.log(msg)
            })
            .catch(err => {
              logs.push(err)
              console.log(err)
            })
          })
          finish(logs)
        }
        else {
          // IF IS DOC SPECIFIED BUT NO SUBCOLLECTION
          let logs = []
          let path = destination.firestore().collection(payload.path).doc(payload.doc)
          let sourceData = {}
          state.source.forEach((item, i) => {
            sourceData[i] = item
          })
          path.set(sourceData)
          .then(() => {
            let msg = `A total of ${state.source.length} records were written to ${destination.name}/${payload.doc}`
            console.log(msg)
            logs.push(msg)
          })
          .catch(err => {
            console.log(err)
            logs.push(err)
          })
          finish(logs)
        }
      }
      else {
        // IF BOTH DOC AND SUBCOLLECTION SPECIFIED
        let logs  = [] 
        let path  = destination.firestore().collection(payload.path).doc(payload.doc).collection(payload.subCollection)
        state.source.forEach(item => {
          path.doc(item.id).set(item)
          .then(() => {
            let msg = `Record ${item.id} written to ${destination.name}/${payload.doc}/${payload.subCollection}`
            console.log(msg)
            logs.push(msg)
          })
          .catch(err => {
            console.log(err)
            logs.push(err)
          })
        })
        finish(logs)
      }      
    }
  },
  getters: {
    getLoading(state){
      return state.loading
    },
    getLogs(state){
      return state.logs
    }
  }
})
