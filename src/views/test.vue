<template>
  <div class="home">
    <div v-if="query">
      <button v-on:click="createItem">Create</button>
      <button v-on:click="randomChange">Random Change</button>
      <div>{{ query.items.length }}</div>
      <ul v-for="item of query.items" :key="item.id">
        <li> {{ item.id }} {{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ToDoList } from '@/models/todo-list'
import { Query } from 'mobx-orm'

@Options({
  components: {}
})
export default class TestPage extends Vue {

  query: Query<ToDoList>|null = null

  async createItem() {
    console.log('create item')
    let i = new ToDoList({name: 'testX'}); await i.save()
    console.log(i)
    console.log(this.query)
  }

  randomChange() {
    console.log('random change')
    if (this.query) {
      for(let i of this.query.items) {
        i.name = i.name + 'XXX'
      }
    }
  }

  async created() {
    console.log('created')
    let i 
    i = new ToDoList({name: 'test1'}); await i.save()
    i = new ToDoList({name: 'test2'}); await i.save()
    i = new ToDoList({name: 'test3'}); await i.save()
    i = new ToDoList({name: 'test4'}); await i.save()
    i = new ToDoList({name: 'test5'}); await i.save()

    // TODO: fix types issue 
    this.query = <any>ToDoList.load()
  }

}
</script>
