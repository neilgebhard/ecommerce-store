'use client'

import { Color, Size } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import qs from 'query-string'

type Props = {
  valueKey: string
  title: string
  data: (Color | Size)[]
}

const Filter: React.FC<Props> = ({ valueKey, title, data }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentId = searchParams.get(valueKey)

  const handleClick = (id: string) => {
    const current = qs.parse(searchParams.toString())

    const query = {
      ...current,
      [valueKey]: id,
    }

    if (id === currentId) {
      query[valueKey] = null
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    )
    console.log(window.location.href)

    router.push(url)
  }

  return (
    <div>
      <h2 className='font-semibold mb-2'>{title}</h2>
      <div className='flex flex-wrap gap-2'>
        {data.map((item) => (
          <Button
            key={item.id}
            variant={currentId === item.id ? 'default' : 'outline'}
            onClick={() => handleClick(item.id)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Filter
