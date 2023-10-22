<template>
  <main class="backlog flex-1 overflow-y-auto">
    <div class="flex flex-col md:flex-row gap-4 pt-4 px-4 md:px-0 bg-color-white sticky top-0">
      <Input v-model="searchName" placeholder="Search" />
      <div class="flex gap-4 flex-wrap md:flex-nowrap">
        <Button class="md:w-fit flex-1" @click="sortByName">Sort by Name</Button>
        <Button class="md:w-fit flex-1" @click="sortByDate">Sort by Date</Button>
      </div>
    </div>
    <ul class="py-4 px-4 md:px-0 flex flex-col gap-4">
      <li v-for="todoItem in shownItems" :key="todoItem.id">
        <ToDoItem :todoItem="todoItem">
          <template #optionsadds>
            <Button class="self-start" size="s" @click="moveToList(todoItem)">Move to List</Button>
          </template>
        </ToDoItem>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import Input from '@/components/common/Input.vue'
import Button from '@/components/common/Button.vue'
import ToDoItem from '@/components/ToDoItem.vue'
import { type ToDoType } from '@/stores/todos';
import { useTodosStore } from '@/stores/todos'
import { ref, computed } from 'vue'

const searchName = ref<string>('')

const { backlog, sortByName, sortByDate, moveToList } = useTodosStore()

const shownItems = computed(() => {
  if (searchName.value) {
    return backlog.filter((item: ToDoType) => item.name.includes(searchName.value))
  } else {
    return backlog
  }
})
</script>
