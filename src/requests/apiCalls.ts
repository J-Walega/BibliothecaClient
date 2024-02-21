import axios from 'axios'

async function authorizeUser(email: string, password: string) {
  return await axios({
    method: 'post',
    url: `/v1/login`,
    data: {
      email: email,
      password: password
    }
  })
}

async function getAllBooks() {
  return await axios({
    method: 'get',
    url: `/v1/books`
  })
}

async function getBook(id: string) {
  return await axios({
    method: 'get',
    url: `/v1/books/${id}`
  })
}

async function postNewBook(book: any) {
  return await axios({
    method: 'post',
    url: '/v1/books',
    data: {
      title: book.title
    }
  })
}

async function getAllAuthors(token: string) {
  return await axios({
    method: 'get',
    url: `/v1/authors`,
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}

async function postNewAuthor(token: string, authorData: any) {
  return await axios({
    method: 'post',
    data: {
      name: authorData.name,
      surname: authorData.surname
    },
    url: `/v1/authors`,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  })
}

async function getUserInfo(token: string, id: string) {
  return await axios({
    method: 'get',
    url: `/v1/user/${id}`,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  })
}

async function getSearchResult(query: string) {
  return await axios({
    method: 'get',
    url: `/v1/Books/search`,
    params: {
      q: query
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export {
  authorizeUser,
  getAllBooks,
  getBook,
  getAllAuthors,
  postNewAuthor,
  getUserInfo,
  getSearchResult,
  postNewBook
}
