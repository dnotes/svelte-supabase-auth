export function autofocus(node: HTMLElement) {
  $effect(() => node.focus());
}