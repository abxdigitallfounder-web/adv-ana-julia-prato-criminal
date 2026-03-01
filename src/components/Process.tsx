import { WA_LINK } from '../constants'
import { WhatsAppIcon } from './icons'

const steps = [
  {
    title: (
      <>
        Atuação <b className="text-gold2">Estratégica</b> Imediata
      </>
    ),
    description:
      'Oferecemos suporte rápido em casos criminais, desde prisões em flagrante até acompanhamentos em delegacias e audiências de custódia, sempre buscando proteger seus direitos e sua liberdade.',
  },
  {
    title: (
      <>
        análise com <b className="text-gold2">orientação jurídica</b> e acompanhamento do processo
        criminal
      </>
    ),
    description:
      'Realizamos uma análise detalhada do seu caso e orientamos sobre as melhores estratégias de defesa, garantindo que todas as medidas legais sejam adotadas para assegurar a sua proteção.',
  },
  {
    title: (
      <>
        ATUAÇÃO EM <b className="text-gold2">EXECUÇÃO DE PENA</b>
      </>
    ),
    description:
      'Acompanhamos mesmo após uma sentença condenatória, garantindo a fiscalização do devido cumprimento e possíveis requerimentos de benefícios e progressões de regime.',
  },
]

export default function Process() {
  return (
    <section className="py-14 px-5" style={{ background: '#112035' }}>
      <div className="max-w-[440px] mx-auto sm:max-w-[520px] md:max-w-2xl lg:max-w-5xl 2xl:max-w-6xl">
        <h2
          className="font-serif font-bold text-white mb-[30px] leading-[1.25]"
          style={{ fontSize: 'clamp(20px, 5vw, 26px)' }}
        >
          Como funciona o nosso <b className="text-gold2 italic">processo</b>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="anim-up border border-l-[3px] p-[22px] md:mb-0"
            style={{
              background: '#112035',
              borderColor: 'rgba(184,151,58,0.3)',
              borderLeftColor: '#b8973a',
            }}
          >
            <div className="text-[12.5px] font-bold tracking-[0.8px] uppercase text-white mb-2.5 leading-[1.4]">
              {step.title}
            </div>
            <p className="text-[13px] text-muted leading-[1.65]\">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 text-center\">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-cta inline-flex"
          >
            <WhatsAppIcon className="w-[17px] h-[17px] flex-shrink-0" />
            Fale com um Especialista
          </a>
        </div>
      </div>
    </section>
  )
}
