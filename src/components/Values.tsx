import { ShieldCheckIcon, TransparencyIcon } from './icons'

export default function Values() {
  return (
    <section className="py-14 px-5" style={{ background: '#112035' }}>
      <div className="max-w-[440px] mx-auto sm:max-w-[520px]">
        <div className="flex flex-col gap-5">
          {/* Card 1 */}
          <div
            className="anim-up border p-8 text-center"
            style={{ background: '#0c1824', borderColor: 'rgba(184,151,58,0.3)' }}
          >
            <span className="block mb-3.5 text-[38px]">
              <ShieldCheckIcon className="w-11 h-11 mx-auto" />
            </span>
            <div className="font-serif text-[17px] font-normal text-white mb-2.5 leading-[1.35]">
              Atendimento comprometido e <b className="text-gold2">humanizado</b>
            </div>
            <p className="text-[13px] text-muted leading-[1.65]">
              Compreendemos a delicadeza de cada situação em um processo penal. Por isso
              oferecemos segurança jurídica através de um atendimento atencioso, personalizado e
              comprometido.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="anim-up border p-8 text-center"
            style={{ background: '#0c1824', borderColor: 'rgba(184,151,58,0.3)' }}
          >
            <span className="block mb-3.5">
              <TransparencyIcon className="w-11 h-11 mx-auto" />
            </span>
            <div className="font-serif text-[17px] font-normal text-white mb-2.5 leading-[1.35]">
              Honorários
              <br />
              <b className="text-gold2">Transparentes</b>
            </div>
            <p className="text-[13px] text-muted leading-[1.65]">
              Prezamos pela ética e transparência - nossos clientes são sempre informados de forma
              objetiva sobre os valores e condições dos serviços prestados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
