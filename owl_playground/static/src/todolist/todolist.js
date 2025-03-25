/** @odoo-module **/

import {Component, useState} from "@odoo/owl";
import {Todo} from "../todo/todo";
import {useAutofocus} from "../utils";

export class TodoList extends Component {
    setup() {
        this.nextId = 0;
        this.todoList = useState([]);
        useAutofocus("todoListInput");
    }

    addTodo(ev) {
        if (ev.keyCode === 13 && ev.target.value !== "") {
            this.todoList.push({
                id: this.nextId++,
                description: ev.target.value,
                done: false,
            });
            ev.target.value = "";
        }
    }

    toggleTodo(todoId) {
        const todo_item = this.todoList.find((todo) => todo.id === todoId);
        if (todo_item) {
            todo_item.done = !todo_item.done;
        }
    }

    removeTodo(todoId) {
        // Find the index of the element to delete
        const index = this.todoList.findIndex((todo) => todo.id === todoId);
        if (index >= 0) {
            // Remove the element at index from list
            this.todoList.splice(index, 1);
        }
    }
}

TodoList.template = "owl_playground.todolist";
TodoList.components = {Todo};
