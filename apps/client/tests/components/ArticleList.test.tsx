import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import ArticleList from '../../src/components/article/ArticleList'
import { SWRConfig } from 'swr'
import { fetcher } from '../../src/api/fetcher'
import { BrowserRouter } from 'react-router-dom'

test('データ取得中はローディング画面が表示される', () => {
  render(
    <SWRConfig value={{ fetcher }}>
      <ArticleList />
    </SWRConfig>
  )
  expect(screen.getByText('is loading...')).toBeInTheDocument()
})

test('データが正しく表示される', async () => {
  render(
    <SWRConfig value={{ fetcher }}>
      <BrowserRouter>
        <ArticleList />
      </BrowserRouter>
    </SWRConfig>
  )
  await waitFor(() => expect(screen.getByText('test-title')).toBeInTheDocument())
  expect(screen.getByText('testcontent')).toBeInTheDocument()
  expect(screen.getByText('2024年5月19日')).toBeInTheDocument()
})
