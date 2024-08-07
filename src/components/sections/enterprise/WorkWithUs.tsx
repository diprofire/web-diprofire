import { ButtonPrimary } from '@/components/buttons/ButtonPrimary'
import Image from 'next/image'
import oficina from '@assets/pictures/oficina.webp'
import taller from '@assets/pictures/taller.webp'
import sala_reunion from '@assets/pictures/sala-reunion.webp'
import almacen from '@assets/pictures/almacen.webp'

const mailto = `mailto:diprofire@diprofire.cl?subject=CV%20-%20${encodeURIComponent(
  'Nombre Apellido'
)}&body=${encodeURIComponent(
  'Adjunto mi CV para postular a una vacante en Diprofire.'
)}`

export const WorkWithUs = () => {
  return (
    <section className='w-full max-w-7xl mx-auto py-10 px-4 sm:px-10 flex flex-col min-[830px]:flex-row items-center gap-12'>
      <div className='flex-1'>
        <h1 className='text-2xl sm:text-4xl font-bold text-balance'>
          Trabaja con nosotros
        </h1>
        <p className='max-w-[60ch] text-lg leading-relaxed text-balance mt-4 mb-6'>
          En Diprofire estamos en constante búsqueda de nuevos talentos para
          incorporar a nuestro equipo de trabajo y seguir creciendo.
        </p>
        <p className='max-w-[60ch] text-lg leading-relaxed text-balance mb-6'>
          Nuestras oficinas y taller se encuentran en la comuna de Antofagasta,
          Chile. Si te interesa trabajar con nosotros, envíanos tu CV y nos
          pondremos en contacto contigo.
        </p>
        <div className='flex justify-start'>
          <ButtonPrimary href={mailto}>Postula con tu CV</ButtonPrimary>
        </div>
      </div>
      <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <Image
          src={oficina}
          alt='Oficina Diprofire'
          className='rounded-lg w-full shadow-lg aspect-video object-cover'
        />
        <Image
          src={taller}
          alt='Taller Diprofire'
          className='rounded-lg w-full shadow-lg aspect-video object-cover'
        />
        <Image
          src={sala_reunion}
          alt='Oficina Diprofire'
          className='rounded-lg w-full shadow-lg aspect-video object-cover'
        />
        <Image
          src={almacen}
          alt='Taller Diprofire'
          className='rounded-lg w-full shadow-lg aspect-video object-cover'
        />
      </div>
    </section>
  )
}