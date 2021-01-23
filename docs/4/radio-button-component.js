var RadioButtonComponent = {
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
        <input type="radio" :id="id" :name="name" :value="value" :checked="checked" required="required">
        <label              :for="id" :title="title">{{text}}</label>
    `,
}

