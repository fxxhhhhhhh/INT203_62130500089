const app = {
    data() {
        return {
            firstname: 'Supanan',
            lastname: 'Chotteratat',
            image: 'images/1.jpg',
            followers: 23,
            ratings: 4.5,
            article: 34,
            job: 'Student'
        }
    }


}
mountedApp = Vue.createApp(app).mount('#app')

