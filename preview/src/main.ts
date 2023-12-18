import Layout from '@im-core/layout'

Layout()
  .then((app) => {
    console.log('当前app: ', app)
  })
  .catch((error) => {
    console.error(error)
  })
