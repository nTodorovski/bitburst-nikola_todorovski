<template>
    <div class="flex justify-between gap-4">
        <div class="flex gap-2">
            <Checkbox v-model="getToDoItem.status" :id="getToDoItem.id" :name="getToDoItem.name" />
            <label class="flex flex-col justify-center gap-2" :for="getToDoItem.id">
                <p :class="{'line-through': getToDoItem.status, 'text-color-dark-gray': getToDoItem.status}" class="m-0 text-roboto15 font-normal break-all">{{ getToDoItem.name }}</p>
                <p class="text-roboto10 text-color-dark-gray">{{ getToDoItem.date.toLocaleDateString("en-GB") }}</p>
            </label>
        </div>
        <div @click="optionOpened = !optionOpened" v-on-click-outside="onClickOutside">
            <slot name="optionsadds" :optionOpened="optionOpened" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Checkbox from '@/components/common/Checkbox.vue';
import { ref, computed } from 'vue';
import { type ToDoType } from '@/stores/todos';
import { vOnClickOutside } from '@vueuse/components';

interface Props {
    todoItem: ToDoType
}

const props = defineProps<Props>()

const optionOpened = ref<boolean>(false)

const getToDoItem = computed(() => props.todoItem)

const onClickOutside = () => optionOpened.value = false
</script>
  