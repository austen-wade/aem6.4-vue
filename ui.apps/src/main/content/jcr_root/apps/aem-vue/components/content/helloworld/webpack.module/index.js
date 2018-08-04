import Vue from 'vue';
import HelloWorldChild from './HelloWorldChild.vue';

Vue.component('hello-world', {
	props: [ 'name' ],
	components: {
		'hello-world-child': HelloWorldChild
	},
	template: `<div>
		<hello-world-child :message="name"></hello-world-child>
	</div>`
})

new Vue({
	el: '#hello-world-app'
});