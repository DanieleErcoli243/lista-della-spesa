console.log("vue OK", Vue);

const {createApp} = Vue;
const app = createApp ({
    data: () => ({
        editing: false,
        items: [
            {id: 1, label: '10 cappelli da festa', purchased: true, highPriority: false},
            {id: 2, label: '2 giochi da tavolo', purchased: true, highPriority: false},
            {id: 3, label: '20 bicchieri', purchased: false, highPriority: true}
        ],
        newItem: '',
        newitemHighPriority: false
        }
    ),
    methods: {
        saveItem() {
            items.push({id: this.items.length + 1, label: this.newItem})
            this.newItem= ''
        },
        doEdit(editing) {
            this.editing = editing
            this.newItem = ''
        }
    }
    
    
})

app.mount("#app");