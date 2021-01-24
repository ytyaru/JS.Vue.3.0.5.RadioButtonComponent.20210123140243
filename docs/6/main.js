window.addEventListener('load', (event) => {
    const app = Vue.createApp({});
    /*
    app.component('radio-button-component', RadioButtonComponent);
    app.component('radio-button-list-component', RadioButtonListComponent);
    app.component('color-radio-button-component', ColorRadioButtonComponent);
    app.component('color-radio-button-event-list-component', ColorRadioButtonComponent);
    */
    app.component('radio-button-event-component', RadioButtonEventComponent);
    app.component('radio-button-event-list-component', RadioButtonEventListComponent);
    app.component('radio-button-event-list-storage-component', RadioButtonEventListStorageComponent);

    app.mount('#app');
});
