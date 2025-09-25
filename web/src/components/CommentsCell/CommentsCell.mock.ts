// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  comments: [
    {
      __typename: 'Comments' as const,
      id: 42,
      name: 'Rob Cameron',
      body: 'First comment',
      createdAt: '2025-09-02T12:34:56Z',
    },
    {
      __typename: 'Comments' as const,
      id: 43,
      name: 'David Price',
      body: 'Second comment',
      createdAt: '2025-09-02T12:34:56Z',
    },
    {
      __typename: 'Comments' as const,
      id: 44,
      name: 'Uncle Fonso',
      body: 'Third comment',
      createdAt: '2025-09-02T12:34:56Z',
    },
  ],
})
