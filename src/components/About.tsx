import { WA_LINK, ABOUT_PHOTO } from '../constants'
import { WhatsAppIcon } from './icons'

export default function About() {
  return (
    <section className="py-14 px-5 bg-navy">
      <div className="max-w-[440px] mx-auto sm:max-w-[520px] md:max-w-2xl lg:max-w-4xl 2xl:max-w-5xl">
        <img
          className="w-full max-w-[300px] mx-auto mb-7 border-2"
          style={{ borderColor: 'rgba(184,151,58,0.3)' }}
          src={ABOUT_PHOTO}
          alt="Dra. Ana Júlia Prato"
        />

        <h2
          className="font-serif font-bold text-white mb-5 leading-[1.2]"
          style={{ fontSize: 'clamp(24px, 6vw, 30px)' }}
        >
          Dra. <b className="text-gold2">Ana Júlia Prato</b>
        </h2>

        <p className="text-[13.5px] text-muted mb-3.5 leading-[1.7]">
          <strong className="text-white font-bold">
            Dra. Ana Júlia Prato é advogada criminalista, atuante no mercado há quase uma década.
          </strong>
        </p>

        <p className="text-[13.5px] text-muted mb-3.5 leading-[1.7]">
          Dedicada ao Direito Criminal e ao Direito Digital, possui expertise consolidada na
          atuação em crimes cibernéticos. Oferece defesa técnica qualificada tanto para pessoas
          físicas quanto para empresas, sempre com foco na proteção eficiente de direitos e
          garantias. Sua abordagem combina profundo conhecimento jurídico com atuação estratégica
          desde o primeiro contato.
        </p>

        <p className="text-[13.5px] text-muted mb-3.5 leading-[1.7]">
          Atende desde demandas urgentes até casos de alta complexidade, incluindo prisão em
          flagrante, embriaguez ao volante, habeas corpus, atuação no Tribunal do Júri, execução
          penal, casos relacionados à Lei Maria da Penha, acompanhamento em delegacias, defesa em
          crimes virtuais e audiências de custódia. Cada caso é tratado com atenção minuciosa e
          estratégia personalizada, garantindo suporte completo em todas as etapas do processo.
        </p>

        <p className="text-[13.5px] text-muted mb-3.5 leading-[1.7]">
          Seu compromisso é atuar com excelência, transparência e proatividade, oferecendo
          soluções jurídicas eficazes e alinhadas às necessidades de cada cliente. Busca sempre
          uma defesa sólida, moderna e eficiente, pautada pelo respeito, responsabilidade e
          dedicação integral ao resultado.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="btn-cta w-full mt-2"
        >
          <WhatsAppIcon className="w-[17px] h-[17px] flex-shrink-0" />
          fale com um especialista
        </a>
      </div>
    </section>
  )
}
