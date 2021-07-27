import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    title: 'the title of this blog',
    author: 'jack',
    url: 'https://example.com',
    likes: 100
  }

  const component = render(
    <Blog blog={blog} />
  )

  const div = component.container.querySelector('.blog')
  expect(div).toHaveTextContent('the title of this blog')
  expect(div).toHaveTextContent('jack')
  expect(div).not.toHaveTextContent('https://example.com')
  expect(div).not.toHaveTextContent('100')
})
