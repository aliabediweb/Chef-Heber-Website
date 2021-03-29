const app = Vue.createApp({
    data() {
        return {
            title: 'Chef Heber Shopping List',
        }
    },
    methods: {
    //     changeTitle(title) {
    //         this.title = title
    //     },
    //     toggleShowBooks() {
    //         this.showBooks = !this.showBooks
    //     },
    //     handleEvent(e, data) {
    //         console.log(e, e.type)
    //         if (data) {
    //             console.log(data)
    //         }
    //     },
    //     handleMousemove(e) {
    //         this.x = e.offsetX
    //         this.y = e.offsetY
    //         this.alt = e.altKey
    //     },
    }, 
    computed: { 
        // filteredBooks() {
        //     return this.books.filter((book) => book.isFav)
        // }
    }
})

app.mount('#app')