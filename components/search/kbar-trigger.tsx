import { useKBar } from 'kbar'
import { Command } from 'lucide-react'

export function KbarSearchTrigger() {
  let { query } = useKBar()

  return (
    <button
      aria-label="Search"
      // className="rounded p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700"
      data-umami-event="search-the-site"
      onClick={() => query.toggle()}
    >
     <span className="block w-5">
                <svg
                  className="text-gray-400 dark:text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>

    </button>
  )
}
