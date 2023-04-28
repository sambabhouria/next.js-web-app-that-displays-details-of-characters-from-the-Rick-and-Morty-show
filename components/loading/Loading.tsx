import loader from '@/public/assets/loader.gif'
import Image from 'next/image'

const Loading = () => {
  return (
    <div>
      <Image src={loader} alt="Loader.." />
    </div>
  )
}

export default Loading
