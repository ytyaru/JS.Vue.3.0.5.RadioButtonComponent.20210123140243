window.addEventListener('load', (event) => {
    const app = Vue.createApp({});
    app.component('radio-button-event-component', RadioButtonEventComponent);
    app.component('radio-button-event-list-component', RadioButtonEventListComponent);
    app.component('radio-button-event-list-storage-component', RadioButtonEventListStorageComponent);
    app.mount('#app');
});
