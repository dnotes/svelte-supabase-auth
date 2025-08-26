import { writable } from 'svelte/store'

export type Message = {
  type: 'success' | 'error' | 'warning' | 'info',
  message: string,
}

const messageStore = writable<Message[]>([])

export const messages = {
  subscribe: messageStore.subscribe,
  add: (type: Message['type'], message: Message['message']) => {
    messageStore.update(messages => [{ type, message }, ...messages])
  },
  drop: (idx:number) => {
    messageStore.update(messages => messages.filter((_, i) => i !== idx))
  },
  clear: () => {
    messageStore.set([])
  }
}
