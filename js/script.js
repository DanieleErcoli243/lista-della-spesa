console.log("vue OK", Vue);

const {createApp} = Vue;
const app = createApp ({
    data: () => ({
        items: [
            {id: 1, label: '10 cappelli da festa'},
            {id: 2, label: '2 giochi da tavolo'},
            {id: 3, label: '20 bicchieri'}
        ],
        newItem: '',
        newitemHighPriority: false
        }
    ),
    methods: {
        saveItem() {
            items.push({id: this.items.length + 1, label: this.newItem})
            this.newItem= ''
        }
    }
    
    
})

app.mount("#app");