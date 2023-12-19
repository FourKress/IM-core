import createApp from '@im-core/create'

createApp()
  .then((app) => {
    console.log('当前app: ', app)
  })
  .catch((error) => {
    console.error(error)
  })
