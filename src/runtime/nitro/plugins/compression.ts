import { useCompression } from 'h3-compression'
import { defineNitroPlugin } from '#imports'

export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('beforeResponse', async (event, response) => {
    if (event.context._isSitemap)
      await useCompression(event, response)
  })
})
