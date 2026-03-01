import { WA_LINK, LAWYER_PHOTO } from '../constants'
import { WhatsAppIcon } from './icons'

export default function Hero() {
  return (
    <section
      className="hero-grain relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#0b1722 0%,#0e1d2e 60%,#0c1824 100%)' }}
    >
      <div className="relative z-10 max-w-[440px] mx-auto px-6 pt-8 sm:max-w-[520px]">
        {/* LOGO */}
        <div className="flex flex-col items-center mb-9">
          <svg
            viewBox="0 0 220 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[110px] h-auto mb-0.5"
          >
            <text
              x="110"
              y="68"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Marcellus,serif"
              fontSize="72"
              fill="#b8973a"
              letterSpacing="-4"
            >
              AP
            </text>
            <line x1="30" y1="80" x2="190" y2="80" stroke="#b8973a" strokeWidth="1" opacity=".5" />
            <text
              x="110"
              y="100"
              textAnchor="middle"
              fontFamily="Marcellus,serif"
              fontSize="13"
              fill="#b8973a"
              letterSpacing="5"
            >
              ANA JÚLIA PRATO
            </text>
            <text
              x="110"
              y="114"
              textAnchor="middle"
              fontFamily="Montserrat,sans-serif"
              fontSize="7"
              fill="#8da4ba"
              letterSpacing="2.5"
            >
              ADVOCACIA E CONSULTORIA JURÍDICA
            </text>
          </svg>
        </div>

        {/* HEADING */}
        <h1
          className="anim-slide-1 font-serif font-normal leading-[1.2] text-white mb-[22px]"
          style={{ fontSize: 'clamp(30px, 7vw, 40px)' }}
        >
          Defesa{' '}
          <b className="text-gold2 italic font-bold">Criminal</b>
          <br />
          Especializada
        </h1>

        {/* SUB TEXTS */}
        <div className="anim-slide-2 mb-6">
          <p className="text-[13.5px] text-muted mb-3 leading-[1.65]">
            Envolvido em{' '}
            <strong className="text-gold2 font-semibold">investigação ou processo criminal</strong>?
            Você precisa de um especialista que domine as estratégias certas para sua defesa.
          </p>
          <p className="text-[13.5px] text-offwhite leading-[1.65]">
            <span className="text-crimson font-bold">Dra. Ana Júlia Prato</span> Criminalista com
            foco exclusivo em defesa processual penal e execução de pena. Experiência técnica para
            proteger seus direitos quando mais importa.
          </p>
        </div>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="btn-cta anim-slide-3 w-full"
        >
          <WhatsAppIcon className="w-[17px] h-[17px] flex-shrink-0" />
          fale com um especialista
        </a>
      </div>

      {/* HERO PHOTO */}
      <div className="anim-fade w-full max-w-[440px] mx-auto mt-8 sm:max-w-[520px]">
        <img
          src={LAWYER_PHOTO}
          alt="Dra. Ana Julia Prato"
          className="w-full h-auto block"
        />
      </div>
    </section>
  )
}
