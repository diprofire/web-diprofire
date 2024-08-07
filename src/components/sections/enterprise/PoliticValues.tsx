import { ValuesItem } from '@components/sections/enterprise/ValuesItem'
import { Safety } from '@/icons/values/Safety'
import { Conduct } from '@/icons/values/Conduct'
import { Participation } from '@/icons/values/Participation'
import { Improve } from '@/icons/values/Improve'
import { Responsibility } from '@/icons/values/Responsibility'
import { Learning } from '@/icons/values/Learning'

let content = {
  Conducta: {
    title: 'Conducta ética',
    description:
      'Actuamos con profesionalidad, integridad, transparencia, respeto y honestidad.'
  },
  Seguridad: {
    title: 'Seguridad y salud',
    description:
      'Nos comprometemos decididamente con la seguridad y salud laboral promoviendo una cultura preventiva.'
  },
  Desarrollo: {
    title: 'Desarrollo profesional',
    description:
      'Motivamos a nuestro personal a través de la confianza, potenciando y capacitando continuamente.'
  },
  Responsabilidad: {
    title: 'Responsabilidad',
    description:
      'Responsabilidad con los clientes, accionistas, socios y empleados con respecto a compromisos, resultados y calidad.'
  },
  Mejora: {
    title: 'Mejora continua',
    description:
      'Introducimos nuevos productos en la protección contra incendios, siempre ofreciendo la mejor relación precio-calidad y garantías del mercado.'
  },
  Participación: {
    title: 'Participación',
    description:
      'Fomentamos el trabajo en equipo para lograr un objetivo común, compartiendo la información y los conocimientos.'
  }
}

export const PoliticValues = () => {
  return (
    <section className='bg-section-clip bg-zinc-200'>
      <div className='w-full max-w-4xl xl:max-w-7xl px-4 sm:px-10 mx-auto flex flex-col sm:justify-center gap-10'>
        <div>
          <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
            Nuestras Políticas y Valores
          </h2>
          <p className='max-w-[60ch]'>
            En Diprofire nos regimos por una serie de políticas y valores que
            nos permiten ofrecer un servicio de calidad y eficiente a nuestros
            clientes.
          </p>
        </div>
        <div className='grid grid-cols-1 pt-5 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
          <ValuesItem
            title={content.Conducta.title}
            content={content.Conducta.description}
          >
            <Conduct className='size-6 md:size-8 xl:size-10 mb-1 sm:mb-3' />
          </ValuesItem>
          <ValuesItem
            title={content.Desarrollo.title}
            content={content.Desarrollo.description}
          >
            <Learning className='size-6 md:size-8 xl:size-10 mb-1 sm:mb-3' />
          </ValuesItem>
          <ValuesItem
            title={content.Mejora.title}
            content={content.Mejora.description}
          >
            <Improve className='size-6 md:size-8 xl:size-10 mb-1 sm:mb-3' />
          </ValuesItem>
          <ValuesItem
            title={content.Participación.title}
            content={content.Participación.description}
          >
            <Participation className='size-6 md:size-8 xl:size-10 mb-1 sm:mb-3' />
          </ValuesItem>
          <ValuesItem
            title={content.Responsabilidad.title}
            content={content.Responsabilidad.description}
          >
            <Responsibility className='size-6 md:size-8 xl:size-10 mb-1 sm:mb-3' />
          </ValuesItem>
          <ValuesItem
            title={content.Seguridad.title}
            content={content.Seguridad.description}
          >
            <Safety className='size-6 md:size-8 xl:size-10 mb-1 sm:mb-3' />
          </ValuesItem>
        </div>
      </div>
    </section>
  )
}