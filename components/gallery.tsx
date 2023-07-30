import Image from 'next/image'
import { Image as ImageType } from '@/types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type Props = {
  images: ImageType[]
}

const Gallery: React.FC<Props> = ({ images }) => {
  return (
    <Tabs defaultValue={images[0].id}>
      {images.map((image) => (
        <TabsContent key={image.id} value={image.id} className='mt-0'>
          <div className='aspect-square relative rounded overflow-hidden'>
            <Image src={image.url} fill className='object-cover' alt='Image' />
          </div>
        </TabsContent>
      ))}
      <TabsList className='grid grid-cols-4 gap-2 h-auto px-0 py-2 bg-transparent'>
        {images.map((image) => {
          return (
            <TabsTrigger
              key={image.id}
              value={image.id}
              className='aspect-square rounded overflow-hidden relative border'
            >
              <Image
                fill
                src={image.url}
                alt='Image'
                className='object-cover hover:scale-110 transition'
              />
            </TabsTrigger>
          )
        })}
      </TabsList>
    </Tabs>
  )
}

export default Gallery
