var RadioButtonEventListComponent = {
    props: {
        name:           { type: String, required: true },
        checked_value:  { type: String, required: false},
        required:       { type: Boolean,required: false},
        list:           { type: Array,  required: true },
    },
    template: `
        <ul>
            <li v-for="item of list" :key="item.id">
                <radio-button-event-component 
                    :id="item.id" 
                    :name="name" 
                    :value="item.value"
                    :checked="item.value === checked_value"
                    :required="required"
                    :title="item.title" 
                    :text="item.text"
                    :checked_value="checked_value"
                    @update:checked_value="onUpdateCheckedValue($event)"
                ></radio-button-event-component>
            </li>
        </ul>
    `,
    methods: {
        onUpdateCheckedValue(event) {
            console.log('onUpdateCheckedValue', event);
            this.$emit('update:checked_value', event);
        }
    }
}

