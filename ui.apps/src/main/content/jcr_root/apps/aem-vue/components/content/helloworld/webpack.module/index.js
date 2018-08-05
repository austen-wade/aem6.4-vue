import Vue from 'vue';
import HelloWorldChild from './HelloWorldChild.vue';
import { activateVue } from 'js/utils';

Vue.component('hello-world', {
	props: [ 'name' ],
	components: {
		'hello-world-child': HelloWorldChild
	},
	template: `<div>
		<hello-world-child :message="name"></hello-world-child>
	</div>`
})

activateVue();