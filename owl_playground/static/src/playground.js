/** @odoo-module **/

import {Card} from "./card/card";
import {Component} from "@odoo/owl";
import {Counter} from "./counter/counter";
import {TodoList} from "./todolist/todolist";

export class Playground extends Component {}

Playground.template = "owl_playground.playground";
Playground.components = {Counter, TodoList, Card};
