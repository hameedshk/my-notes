'use client'

import { useEffect } from 'react'
import type { StatsType } from '~/db/schema'
 import { useBlogStats, useUpdateBlogStats } from '~/hooks/use-blog-stats'

export function ViewsCounter({
  type,
  slug,
  className,
}: {
  type: StatsType
  slug: string
  className?: string
}) {
  let [stats, isLoading] = useBlogStats(type, slug)
  let updateView = useUpdateBlogStats()
  const key = `viewed-${slug}`; // Unique key for each page

  useEffect(() => {
    if (!isLoading && stats && !localStorage.getItem(key)) {
      updateView({ type, slug, views: stats['views'] + 1 })
      localStorage.setItem(key, 'true'); // Mark as viewed
    }
  }, [stats, isLoading])

  return <span className={className}>{isLoading ? '---' : (stats['views'] || 0) + ' views'}</span>
}