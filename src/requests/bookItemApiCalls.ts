import axios from 'axios'

async function getBookItems(bookId: number) {
  return await axios({
    method: 'get',
    url: `/v1/BookItems/${bookId}`
  })
}

export { getBookItems }
