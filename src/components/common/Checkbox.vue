<template>
    <input
        :id="id"
        :name="name"
        type="checkbox"
        v-model="theModel"
        class="cursor-pointer w-6 h-6 focus:ring-0 focus:ring-offset-0 text-color-blue bg-color-white border-color-light-gray rounded-full "
    />
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    modelValue: boolean
    id?: string
    name?: string
}

const props = withDefaults(defineProps<Props>(), {
    name: undefined,
    id: undefined
})

const emit = defineEmits(['update:modelValue'])

const theModel = computed({
    get() {
        return props.modelValue 
    },
    set(value) {
        emit('update:modelValue', value)
    }
})
</script>