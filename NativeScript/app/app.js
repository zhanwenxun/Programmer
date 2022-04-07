import Vue from 'nativescript-vue';

import Index from './components/Index';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <Index />
        </Frame>`,

    components: {
        Index
    }
}).$start();