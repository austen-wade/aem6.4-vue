import Vue from 'vue';

Vue.component('hello-world', {
	props: [ 'message' ],
	template: `<div>My Message: {{ message }}</div>`
})

new Vue({
	el: '#hello-world-app'
});