import type { Handle } from "@sveltejs/kit";
import path from "path";
import fs from "fs/promises";

export const handle:Handle = async ({ event, resolve }) => {
  // load the webcomponent files from the static directory
  if (event.url.pathname.startsWith('/webcomponent-')) {
    try {
        const filename = path.join('static', event.url.pathname) + '.html'
        const html = await fs.readFile(filename, 'utf-8')
        return new Response(html, { status: 200, headers: { 'Content-Type': 'text/html' } })
    } catch (error) {
        return resolve(event)
    }
  }
  // otherwise, resolve the request
  return resolve(event)
}