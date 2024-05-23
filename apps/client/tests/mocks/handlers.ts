import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('http://localhost:8787/api/articles', () =>
    HttpResponse.json([
      {
        id: 'test-id1',
        title: 'test-title',
        content: 'test-content',
        createdAt: '2024-05-18T16:09:42.519Z',
        updatedAt: '2024-05-18T16:09:42.519Z',
        publishedAt: null,
        articleTags: [
          {
            articleId: 'test-id1',
            tagId: 'test-article-tag1',
            tag: {
              id: 'test-tag1',
              name: 'test-tagname',
              color: 'test-color',
            },
          },
        ],
      },
    ])
  ),
]
