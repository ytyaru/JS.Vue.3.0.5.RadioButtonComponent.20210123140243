var RadioButtonEventListStorageComponent = {
    props: {
        name: { type: String, required: true },
    },
    template: `
        <p>CheckedValue: {{CheckedValue}}</p>
        <radio-button-event-list-component
            :name="name"
            checked_value="CheckedValue"
            required="false"
            :list="[
                {id:'setting-color-white', value:'white', title:'背景白', text:'白'},
                {id:'setting-color-black', value:'black', title:'背景黒', text:'黒'},
                {id:'setting-color-red',   value:'red',   title:'背景赤', text:'赤'},
            ]"
        ></radio-button-event-list-component>
    `,
    computed: {
        CheckedValue: {
            get() {
                console.log(this.name);
                console.log(window.sessionStorage.getItem(this.name));
                console.log(window.localStorage.getItem(this.name));
                console.log(window.sessionStorage.getItem(this.name) || window.localStorage.getItem(this.name) || 'black');
                return window.sessionStorage.getItem(this.name) || window.localStorage.getItem(this.name) || 'black';
            },
            set(value) {
                console.log('set');
                window.localStorage.setItem(this.name, this.checked_value);
            }
        }
    }
}

