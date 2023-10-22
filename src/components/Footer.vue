<template>
  <footer>
    <div class="flex gap-4 px-4 md:px-0">
        <Input @keyup.enter="createItem" v-model="newTodoItem" placeholder="Enter ToDo Item" />
        <Button @click="createItem" :disabled="!newTodoItem.trim().length">Add Item</Button>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Input from '@/components/common/Input.vue'
import Button from '@/components/common/Button.vue'
import { useTodosStore } from '@/stores/todos'

const { createToDoItem, backlog, toDoList } = useTodosStore()

const route = useRoute()

const newTodoItem = ref<string>('')

const createItem = () => {
  if (!newTodoItem.value.trim().length) return
  
  if (route.name === 'backlog') {
      createToDoItem(newTodoItem.value, backlog)
  } else {
      createToDoItem(newTodoItem.value, toDoList)
  }
  newTodoItem.value = ''
}
</script>
