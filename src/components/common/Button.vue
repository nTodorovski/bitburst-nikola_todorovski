<template>
    <button :class="classSet" :disabled="disabled">
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
    size?: 's' | 'l'
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    size: 'l',
    disabled: false
})

const classSet = computed(() => [
    {
        'whitespace-nowrap bg-color-blue hover:bg-color-light-blue text-color-white text-roboto15 py-3 px-[15px] border border-color-dark-blue hover:border-color-blue disabled:bg-color-light-gray disabled:border-color-gray rounded': props.size === 'l'
    },
    {
        'whitespace-nowrap bg-color-white text-color-blue active:text-color-dark-blue text-roboto13 border border-color-light-gray active:border-color-dark-gray rounded py-2 px-3': props.size === 's'
    }
])
</script>