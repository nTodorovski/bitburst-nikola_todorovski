import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface ToDoType {
  id: string
  name: string
  date: Date
  status: boolean
}

export const useTodosStore = defineStore('todos', () => {
  const toDoList = ref<ToDoType[]>([])
  const backlog = ref<ToDoType[]>([])

  const sortByName = () => {
    backlog.value = backlog.value.sort((a: ToDoType, b: ToDoType) => a.name.localeCompare(b.name))
  }

  const sortByDate = () => {
    backlog.value = backlog.value.sort((a: ToDoType, b: ToDoType) => a.date.getTime() - b.date.getTime())
  }

  const moveToList = (todoItem: ToDoType) => {
    const foundToDoIndex = backlog.value.findIndex((item: ToDoType) => item.id === todoItem.id)
    if (foundToDoIndex > -1) {
      backlog.value.splice(foundToDoIndex, 1)
    }
    toDoList.value.push(todoItem)
  }

  const moveToBacklog = (todoItem: ToDoType) => {
    const foundToDoIndex = toDoList.value.findIndex((item: ToDoType) => item.id === todoItem.id)
    if (foundToDoIndex > -1) {
      toDoList.value.splice(foundToDoIndex, 1)
    }
    backlog.value.push(todoItem)
  }

  const deleteItem = (todoItem: ToDoType) => {
    const foundToDoIndex = toDoList.value.findIndex((item: ToDoType) => item.id === todoItem.id)
    if (foundToDoIndex > -1) {
      toDoList.value.splice(foundToDoIndex, 1)
    }
  }

  const createToDoItem = (name: string, list: ToDoType[]) => {
    const item: ToDoType = {
      id: crypto.randomUUID(),
      name: name,
      date: new Date(),
      status: false
    }
    list.push(item)
  }

  return { backlog, toDoList, moveToBacklog, deleteItem, sortByName, sortByDate, moveToList, createToDoItem }
})
