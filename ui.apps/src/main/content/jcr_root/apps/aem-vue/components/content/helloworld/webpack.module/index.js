import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';
import { activateVue } from 'js/utils';

// Connector Component for Single File Component
Vue.component('hello-world-connector', {
	props: [ 'name' ],
	components: {
		'hello-world-component': HelloWorld
	},
	template: `<hello-world-component :message="name"><slot></slot></hello-world-component>`
})

// Render Vue Components
activateVue();