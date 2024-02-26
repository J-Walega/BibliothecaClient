import axios from 'axios'

async function PostComment(token: string, data: Comment) {
  return await axios({
    method: 'post',
    url: `/v1/Comments/${data.bookId}`,
    params: {
      score: data.score,
      content: data.content
    },
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}

async function GetBookComments(bookId: number) {
  return await axios({
    method: 'get',
    url: '/v1/Comments',
    params: {
      id: bookId
    }
  })
}

async function DeleteComment(token: string, commentId: number) {
  return await axios({
    method: 'delete',
    url: `/v1/Comments/${commentId}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export interface Comment {
  bookId: number
  score: number
  content: string
}

export { PostComment, GetBookComments, DeleteComment }
