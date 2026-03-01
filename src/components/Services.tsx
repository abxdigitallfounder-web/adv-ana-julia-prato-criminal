import { WA_LINK } from '../constants'
import { ScalesIcon, WhatsAppIcon } from './icons'

interface ServiceCardProps {
  title: React.ReactNode
  subtitle?: string
  description: string
}

function ServiceCard({ title, subtitle, description }: ServiceCardProps) {
  return (
    <div
      className="anim-up border p-7 pb-[22px] mb-[18px]"
      style={{ background: '#112035', borderColor: 'rgba(184,151,58,0.3)' }}
    >
      <span className="block mb-3 text-gold2">
        <ScalesIcon className="w-[30px] h-[30px]" />
      </span>
      <div className="text-[12.5px] font-bold tracking-[0.8px] uppercase text-white leading-[1.4] mb-1.5">
        {title}
      </div>
      {subtitle && (
        <div className="text-[11.5px] text-muted italic mb-[9px] uppercase tracking-[0.5px]">
          {subtitle}
        </div>
      )}
      <p className="text-[13px] text-muted leading-[1.65] mb-5">{description}</p>
      <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-sm">
        <WhatsAppIcon className="w-[14px] h-[14px] flex-shrink-0" />
        Fale com um Especialista
      </a>
    </div>
  )
}

const services: ServiceCardProps[] = [
  {
    title: (
      <>
        Prisões em flagrante e{' '}
        <span className="text-gold3">audiência de custódia</span>
      </>
    ),
    description:
      'Ao realizar prisões em flagrante, asseguramos conduções respeitosas até a delegacia, preservando os direitos do detido. Comprometemo-nos a evitar abusos, garantindo um processo justo e transparente.',
  },
  {
    title: (
      <>
        ⁠Pedidos de <span className="text-gold3">liberdade</span>
      </>
    ),
    subtitle: '(liberdade provisória, revogação e relaxamento de preventiva)',
    description:
      'Formulamos o requerimento de liberdade provisória para possibilitar que o cliente responda ao processo em liberdade.',
  },
  {
    title: (
      <>
        ⁠Acompanhamento em delegacias e{' '}
        <span className="text-gold3">inquérito</span>
      </>
    ),
    description:
      'Evitaremos conduções injustas e excessivas às delegacias de polícia. Estaremos ao seu lado para assegurar o pleno respeito aos seus direitos.',
  },
  {
    title: (
      <>
        Habeas <span className="text-gold3">Corpus</span>
      </>
    ),
    description:
      'O habeas corpus deve ser conduzido por um profissional experiente e técnico para aumentar as chances de concessão do benefício.',
  },
  {
    title: (
      <>
        ⁠Acompanhamento em <span className="text-gold3">ação penal</span>
      </>
    ),
    description:
      'Compreende a defesa técnica do acusado. Envolve análise detalhada das provas, elaboração de estratégias jurídicas, apresentação de manifestações e acompanhamento de audiências, assegurando o respeito ao devido processo legal e às garantias constitucionais.',
  },
  {
    title: (
      <>
        Atuação em processo de{' '}
        <span className="text-gold3">Execução de Pena</span>
      </>
    ),
    description:
      'Envolve a garantia do cumprimento correto da sentença imposta ao condenado, focando na ressocialização e no respeito aos direitos do indivíduo. Realizamos o acompanhamento da execução, solicitando benefícios como progressão de regime, livramento condicional, detração, remição da pena, indulto e comutação, saída temporária, entre outros.',
  },
  {
    title: (
      <>
        TRIBUNAL DO <span className="text-gold3">JÚRI</span>
      </>
    ),
    subtitle: '(atuação em plenário crimes contra a vida)',
    description:
      'A atuação no Tribunal do Júri envolve a defesa técnica de julgamentos que envolvem crimes dolosos contra a vida, com preparação estratégica do processo, formulação de teses defensivas e participação nos debates perante os jurados. O trabalho é pautado pela análise minuciosa das provas, pelo respeito às garantias constitucionais e pela busca de um julgamento justo.',
  },
  {
    title: (
      <>
        Crimes <span className="text-gold3">Virtuais</span>
      </>
    ),
    description:
      'Atuação em casos de delitos praticados por meios digitais, como golpes, invasão de dispositivos, extorsão, crimes contra a honra e uso indevido de dados. Inclui rastreamento de evidências, representação criminal e medidas para remoção de conteúdo.',
  },
  {
    title: (
      <>
        Audiência de <span className="text-gold3">Custódia</span>
      </>
    ),
    description:
      'Atuação imediata após a prisão para verificar a legalidade do ato e possíveis abusos, buscando a liberdade ou medidas alternativas. Envolve defesa técnica perante o juiz e apresentação de argumentos para evitar a manutenção da prisão.',
  },
]

export default function Services() {
  return (
    <section className="py-14 px-5 bg-offwhite">
      <div className="max-w-[440px] mx-auto sm:max-w-[520px]">
        <div className="mb-9 text-center">
          <div
            className="text-[16px] font-bold tracking-[2px] uppercase leading-[1.3]"
            style={{ color: '#0c1824' }}
          >
            ADVOCACIA <b className="text-gold">CRIMINAL&nbsp;&nbsp;ESPECIALIZADA</b>
          </div>
        </div>

        {services.map((svc, i) => (
          <ServiceCard key={i} {...svc} />
        ))}
      </div>
    </section>
  )
}
