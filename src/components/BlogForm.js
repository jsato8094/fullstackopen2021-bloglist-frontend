import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleCreate = async (event) => {
    event.preventDefault()
    try {
      const newObject = {title, author, url}
      const created = await createBlog(newObject)
      console.log(created, 'is created')
      setTitle('')
      setAuthor('')
      setUrl('')
    } catch (exception) {
      console.log('failed to create new note')
    }
  }  

  return (
    <div>
    <h2>create new</h2>
    <div>
    <form onSubmit={handleCreate}>
      <div>
        title:
          <input
          type="text"
          value={title}
          name="Title"
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        author:
          <input
          type="text"
          value={author}
          name="Author"
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        url:
          <input
          type="text"
          value={url}
          name="URL"
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>
      <button type="submit">create</button>
    </form>
    </div>
    </div>
  )
}

export default BlogForm
