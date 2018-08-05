import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';
import { activateVue } from 'js/utils';
import TwoColumn from 'js/TwoColumn.vue';

// Connector Component for Single File Component
Vue.component('hello-world-connector', {
	props: [ 'colOneMessage', 'colTwoMessage' ],
	components: {
		'hello-world-component': HelloWorld,
		'two-column': TwoColumn
	},
	template: `
	<two-column>
		<template slot="column-one">
			<hello-world-component :message="colOneMessage"><slot name="slot-one"></slot></hello-world-component>
		</template>
		<template slot="column-two">
			<hello-world-component :message="colTwoMessage"><slot slot-two></slot></hello-world-component>
		</template>
	</two-column>
	`
})

// Render Vue Components
activateVue();