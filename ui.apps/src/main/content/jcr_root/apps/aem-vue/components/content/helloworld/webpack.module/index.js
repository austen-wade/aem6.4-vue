import Vue from 'vue';
import HelloWorldChild from './HelloWorldChild.vue';
import { activateVue } from 'js/utils';

// Connector Component for Single File Component
Vue.component('hello-world', {
	props: [ 'name' ],
	components: {
		'hello-world-child': HelloWorldChild
	},
	template: `<hello-world-child :message="name"></hello-world-child>`
})

// Render Vue Components
activateVue();