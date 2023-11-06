export const fetchHygraphQuery = async (query: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN!}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  })

  const { data } = await response.json()

  return data
}
