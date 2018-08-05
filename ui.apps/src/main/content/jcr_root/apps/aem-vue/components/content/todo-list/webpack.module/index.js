import Vue from 'vue';
import { activateVue } from 'js/utils';
import TodoList from './TodoList.vue';

Vue.component('todo-list-connector', {
    props: [ 'listTitle' ],
    components: {
        'todo-list': TodoList
    },
    template: `
        <todo-list :title="listTitle"></todo-list>
    `
});

activateVue();