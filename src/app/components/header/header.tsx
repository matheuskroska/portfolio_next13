import { Book } from '@/app/types/page-info'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'
import Image from 'next/image'
import React from 'react'

const getData = async (): Promise<Book> => {
  const query = `
  query Books {
    books {
      id
      isbn
      name
    }
  }
  `


  return fetchHygraphQuery(query)
}

export const Header = async () => {
  const { books } = await getData()

  return (
    <aside className="absolute left-0 h-screen w-60 bg-blue-600 shadow-md">
      <nav>
        <div className="flex flex-col justify-center items-center h-screen gap-5 px-9">
          <Image src={'next.svg'} width={150} height={150} alt="NextSVG" />
          <ul className="w-full flex flex-col gap-y-4">
            {books.map((book) => (
              <li key={book.id}>
                <a
                  href={`/books/${book.id}`}
                  className="flex justify-between items-center px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  <span>{book.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  )
}
