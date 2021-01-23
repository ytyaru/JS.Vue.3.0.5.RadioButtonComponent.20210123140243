var RadioButtonListStorageComponent = {
    props: {
        name:           { type: String, required: true },
        checked_value:  { type: String, required: false},
        required:       { type: Boolean,required: false},
        list:           { type: Array,  required: true },
    },
    template: `
        <ul>
            <li v-for="item of list" :key="item.id">
                <radio-button-component 
                    :id="item.id" 
                    :name="name" 
                    :value="item.value"
                    :checked="item.value === checked_value"
                    :required="required"
                    :title="item.title" 
                    :text="item.text"
                    @load="load"
                    @input="changeSave"
                    @beforeunload="save"
                ></radio-button-component>
            </li>
        </ul>
    `,
    methods: {
        load() {
            console.log('load');
            const s = window.sessionStorage.getItem(this.name);
            if (s) {
                this.checked_value = s;
            } else {
                this.checked_value = window.localStorage.getItem(this.name);
            }
        }
        save() {
            console.log('save');
            window.localStorage.setItem(this.name, checked_value);
        }
        changeSave() {
            console.log('changeSave');
            window.sessionStorage.setItem(this.name, checked_value);
        }
    }
}

