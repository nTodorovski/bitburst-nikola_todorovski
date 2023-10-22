<template>
  <main class="todo-view flex flex-col flex-1 overflow-y-auto">
    <div class="todo-view__done py-3">
      <div @click="expandDoneItems" class="todo-view__count-of-done cursor-pointer flex items-center gap-x-3.5 pl-[22px] md:pl-1.5 w-max">
        <svg class="transition" :class="{'rotate-90': isExpanded }" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.13883 6.46634L3.76097 11.8068C3.5016 12.0644 3.0811 12.0644 2.82176 11.8068L2.19452 11.1839C1.93559 10.9268 1.9351 10.5101 2.19341 10.2524L6.45546 5.99999L2.19341 1.74765C1.9351 1.48991 1.93559 1.07318 2.19452 0.816057L2.82176 0.193175C3.08113 -0.0643917 3.50163 -0.0643917 3.76097 0.193175L9.1388 5.53366C9.39817 5.7912 9.39817 6.20878 9.13883 6.46634Z" fill="#CCCCCC"/>
        </svg>
        <span class="text-roboto15 text-color-light-gray">{{ doneToDoItems.length }} Done</span>
      </div>
      <Transition
        appear
        name="todo-view--slidein"
      >
        <ul v-if="isExpanded" class="mt-4 mx-4 md:mx-0 flex flex-col gap-4">
          <li v-for="todoItem in doneToDoItems" :key="todoItem.id">
            <ToDoItem :todoItem="todoItem" />
          </li>
        </ul>
      </Transition>
    </div>
    <div class="pending border-t border-t-color-chrome">
      <Transition
        appear
        name="todo-view--slidein"
      >
        <ul class="p-4 md:px-0 flex flex-col gap-4">
          <li :key="todoItem.id" v-for="todoItem in pendingToDoItems">
            <ToDoItem :todoItem="todoItem">
              <template #optionsadds="optionProps">
                <div class="relative">
                  <div :class="{'options--expanded': optionProps.optionOpened}" class="rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
                    <svg class="text-color-dark-gray" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.9465 10.0558C12.9465 11.666 11.6437 12.9687 10.0335 12.9687C8.4233 12.9687 7.12056 11.666 7.12056 10.0558C7.12056 8.44556 8.4233 7.14282 10.0335 7.14282C11.6437 7.14282 12.9465 8.44556 12.9465 10.0558ZM17.1541 7.14282C15.5439 7.14282 14.2411 8.44556 14.2411 10.0558C14.2411 11.666 15.5439 12.9687 17.1541 12.9687C18.7643 12.9687 20.067 11.666 20.067 10.0558C20.067 8.44556 18.7643 7.14282 17.1541 7.14282ZM2.91296 7.14282C1.30274 7.14282 0 8.44556 0 10.0558C0 11.666 1.30274 12.9687 2.91296 12.9687C4.52317 12.9687 5.82591 11.666 5.82591 10.0558C5.82591 8.44556 4.52317 7.14282 2.91296 7.14282Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <Transition
                    appear
                    name="todo-view--slidefromright"
                  >
                    <div class="flex flex-col absolute right-full top-0" v-if="optionProps.optionOpened">
                      <Button @click.prevent="deleteItem(todoItem)" size="s" class="text-left rounded-t-lg rounded-b-none border-b-0">Delete</Button>
                      <Button @click.prevent="moveToBacklog(todoItem)" size="s" class="text-left rounded-b-lg rounded-t-none">Move to Backlog</Button>
                    </div>
                  </Transition>
                </div>
              </template>
            </ToDoItem>
          </li>
        </ul>
      </Transition>
    </div>
  </main>
</template>

<script setup lang="ts">
import ToDoItem from '@/components/ToDoItem.vue'
import Button from '@/components/common/Button.vue'
import { useTodosStore } from '@/stores/todos'
import { ref, computed, watch } from 'vue'
import { type ToDoType } from '@/stores/todos';

const { toDoList, moveToBacklog, deleteItem } = useTodosStore()

const doneToDoItems = computed(() => toDoList.filter((item: ToDoType) => item.status))

const pendingToDoItems = computed(() => toDoList.filter((item: ToDoType) => !item.status))

const isExpanded = ref<boolean>(doneToDoItems.value?.length ? true: false)

const expandDoneItems = () => {
  if (doneToDoItems.value?.length) {
    isExpanded.value = !isExpanded.value
  }
}

watch(() => doneToDoItems.value, () => {
  if (doneToDoItems.value?.length === 0) {
    isExpanded.value = false
  }
})
</script>

<style scoped>
.todo-view--slidein-enter-active,
.todo-view--slidein-leave-active {
  @apply transition-all;
  @apply duration-300;
  @apply ease-in-out;
}

.todo-view--slidein-enter-from,
.todo-view--slidein-leave-to {
  @apply opacity-0;
  @apply translate-y-[-12px];
}

.todo-view--slidefromright-enter-active,
.todo-view--slidefromright-leave-active {
  @apply transition-all;
  @apply duration-300;
  @apply ease-in-out;
}

.todo-view--slidefromright-enter-from,
.todo-view--slidefromright-leave-to {
  @apply opacity-0;
  @apply translate-x-[12px];
}

.options--expanded {
  @apply bg-color-chrome;
}

.options--expanded > svg {
  @apply text-color-black;
}
</style>
