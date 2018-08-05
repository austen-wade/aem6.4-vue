import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';
import TwoColumn from 'js/TwoColumn.vue';
import { activateVue } from 'js/utils';

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
			<hello-world-component :message="colOneMessage">
				<template>
					<p>This is a Vue Component</p>
				</template>
			</hello-world-component>
		</template>
		<template slot="column-two">
			<hello-world-component :message="colTwoMessage">
				<template>
					<p>
						This vue component has multiple slots in it and passes two AEM props
					</p>
				</template>
			</hello-world-component>
		</template>
	</two-column>
	`
})

// Render Vue Components
activateVue();