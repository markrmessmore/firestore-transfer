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
    source: []
  },
  mutations: {
    setLoading(state, payload){
      state.loading = payload
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

      if (payload.subCollection == ''){
        if (payload.doc == ''){

        }
        else {
          let path = destination.firestore().collection(payload.path).doc()

        }
      }
      else {
        let path = destination.firestore().collection(payload.path).doc(payload.doc).collection(payload.subCollection)
        state.source.forEach(item => {
          path.doc(item.id).set(item)
          .then(() => {console.log(`${item.id} written to ${destination.name}`)})
          .catch(err => {console.log(err)})
        })
        commit('setLoading', {msg: "", status: false})
      }      
    }
  },
  getters: {
    getLoading(state){
      return state.loading
    }
  }
})
