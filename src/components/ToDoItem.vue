<template>
    <div class="flex justify-between gap-4">
        <div class="flex gap-2">
            <Checkbox v-model="todoItem.status" :id="todoItem.id" :name="todoItem.name" />
            <label class="flex flex-col justify-center gap-2" :for="todoItem.id">
                <p :class="{'line-through': todoItem.status, 'text-color-dark-gray': todoItem.status}" class="m-0 text-roboto15 font-normal break-all">{{ todoItem.name }}</p>
                <p class="text-roboto10 text-color-dark-gray">{{ todoItem.date.toLocaleDateString("en-GB") }}</p>
            </label>
        </div>
        <div @click="optionOpened = !optionOpened" v-on-click-outside="onClickOutside">
            <slot name="optionsadds" :optionOpened="optionOpened" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Checkbox from '@/components/common/Checkbox.vue';
import { ref } from 'vue'
import { type ToDoType } from '@/stores/todos';
import { vOnClickOutside } from '@vueuse/components';

interface Props {
    todoItem: ToDoType
}

defineProps<Props>()

const optionOpened = ref<boolean>(false)

const onClickOutside = () => optionOpened.value = false
</script>
  