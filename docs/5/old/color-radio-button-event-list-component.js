var ColorRadioButtonComponent = {
    template: `
        <radio-button-event-list-component
            name="color"
            checked_value="black"
            required="false"
            :list="[
                {id:'setting-color-white', value:'white', title:'背景白', text:'白'},
                {id:'setting-color-black', value:'black', title:'背景黒', text:'黒'},
                {id:'setting-color-red',   value:'red',   title:'背景赤', text:'赤'},
            ]"
        ></radio-button-event-list-component>
    `,
}

