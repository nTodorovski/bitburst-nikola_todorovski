<template>
    <input
        :disabled="disabled"
        :type="type"
        :placeholder="placeholder"
        v-model="theModel"
        class="placeholder-color-light-gray text-color-text-black active:text-color-black text-light-gray text-roboto15 focus:outline-none font-normal border border-color-light-gray active:border-color-blue rounded w-full py-3 px-[15px]"
    />
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    modelValue: string
    placeholder?: string
    type?: string
    name?: string
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    name: 'text',
    modelValue: '',
    placeholder: undefined,
    disabled: false
})

const theModel = computed({
    get () { return props.modelValue.toString() },
    set (value: string) { emit('update:modelValue', value) }
})

const emit = defineEmits(['update:modelValue'])
</script>