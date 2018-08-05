import Vue from 'vue';
import { activateVue } from 'js/utils';
import TodoList from './TodoList.vue';

Vue.component('todo-list-connector', {
    props: {
        listTitle: String,
        listItems: Array
    },
    components: {
        'todo-list': TodoList
    },
    template: `
        <todo-list :title="listTitle" :list="[ 1, 2, 3 ]">
            <slot></slot>
        </todo-list>
    `
});

activateVue();