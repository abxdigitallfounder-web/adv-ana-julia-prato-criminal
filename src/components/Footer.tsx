import { WA_LINK, FOOTER_PHOTO } from '../constants'
import { WhatsAppIcon, EmailIcon, InstagramIcon } from './icons'

export default function Footer() {
  return (
    <footer className="bg-navy py-11 px-5 pb-7">
      <div className="max-w-[440px] mx-auto sm:max-w-[520px]">
        {/* FOOTER PHOTO / LOGO */}
        <div className="text-center mb-6">
          <img
            src={FOOTER_PHOTO}
            alt="Dra. Ana Julia Prato"
            className="max-w-[200px] mx-auto mb-4"
            style={{ opacity: 0.9 }}
          />
        </div>

        {/* SOCIALS */}
        <div className="flex gap-5 justify-center mb-[22px]">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="text-gold2 flex hover:text-white transition-colors"
          >
            <WhatsAppIcon className="w-[22px] h-[22px]" />
          </a>
          <a
            href="mailto:anajuliaprato@hotmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="E-mail"
            className="text-gold2 flex hover:text-white transition-colors"
          >
            <EmailIcon className="w-[22px] h-[22px]" />
          </a>
          <a
            href="https://www.instagram.com/anajuliaprato.adv/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-gold2 flex hover:text-white transition-colors"
          >
            <InstagramIcon className="w-[22px] h-[22px]" />
          </a>
        </div>

        {/* INFO */}
        <div className="text-center mb-7">
          <p className="text-[13px] text-muted leading-[1.7]">
            <strong className="text-white">Horários de atendimento:</strong>
            <br />
            Segunda a Sexta – 08:00 às 18:00
          </p>
          <br />
          <p className="text-[13px] text-muted leading-[1.7]">
            Deputado Honorato de Carvalho, 947 – Centro, Jataí – GO
          </p>
        </div>

        {/* DISCLAIMER */}
        <div
          className="border-t pt-[18px] text-[11px] text-center leading-[1.7]"
          style={{ borderColor: 'rgba(184,151,58,0.3)', color: 'rgba(141,164,186,0.55)' }}
        >
          <p>
            Este site não é um produto Meta Platforms, Inc, Google LLC, tampouco oferece serviços
            públicos oficiais. Somos um escritório de advocacia, que oferece serviços júridicos,
            privativos de advogados, de acordo com a legislação vigente e o Código de Ética e
            Disciplina da OAB do Brasil.
          </p>
        </div>

        {/* DEV */}
        <div
          className="text-center text-[11px] mt-[18px]"
          style={{ color: 'rgba(141,164,186,0.45)' }}
        >
          Desenvolvido por Assessorial Digitall
          <br />
          <a
            href="https://agenciatalisma.com.br/"
            target="_blank"
            rel="noreferrer"
            style={{ opacity: 0.6 }}
          >
            Agência Talismã
          </a>
        </div>
      </div>
    </footer>
  )
}
