import Vue from 'vue';

export function activateVue () {
    document.querySelectorAll( '[data-component]' ).forEach(el => {
        new Vue({
            el: el
        });
    });
}