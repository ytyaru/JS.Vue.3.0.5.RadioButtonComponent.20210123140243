var RadioButtonEventComponent = {
    props: {
        id:       { type: String, required: true },
        name:     { type: String, required: true },
        value:    { type: String, required: true },
        checked:  { type: Boolean,required: false},
        required: { type: Boolean,required: false},
        title:    { type: String, required: false},
        text:     { type: String, required: true },
    },
    template: `
        <input 
            type="radio" 
            :id="id" 
            :name="name" 
            :value="value" 
            :checked="checked" 
            :required="required"
            @load="load($event)"
            @input="changeSave($event)"
            @beforeunload="save($event)"
        >
        <label              :for="id" :title="title">{{text}}</label>
    `,
    methods: {
        load(event) {
            console.log('loading');
            const value = window.sessionStorage.getItem(this.name) || window.localStorage.getItem(this.name);
            if (value && value === this.value) {
                console.log('load', this.name, value);
                this.checked = true;
            }
        },
        save(event) {
            if (this.checked) {
                console.log('save', this.name, this.value);
                window.localStorage.setItem(this.name, this.value);
            }
        },
        changeSave(event) {
            console.log('changeSave', this.name, this.value);
            window.sessionStorage.setItem(this.name, this.value);
        }
    }
}

