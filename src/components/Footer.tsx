import { Logo } from './Logo'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 text-white">
      <div className="lp-container p-8">
        <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-0">
          <section className="flex flex-col gap-2 sm:max-w-[300px]">
            <Logo />
            <h4 className="text-sm">
              A short form content agency specialized to make your audience
              grow.
            </h4>
          </section>
          <section className="flex flex-col">
            <p className="text-lg font-bold">Contact</p>
            <h4 className="text-sm">vitor@brieflyagency.com</h4>
          </section>
        </section>

        <div className="my-3 h-[2px] w-full bg-zinc-700" />

        <section className="flex items-center justify-between text-xs">
          <p>© 2023 Briefly Agency.</p>
          <p>
            Founded by{' '}
            <a
              className="font-bold text-cyan-400"
              href="https://www.linkedin.com/in/vitor-windberg/"
              target="_blank"
              rel="noreferrer"
            >
              Vitor
            </a>{' '}
            and{' '}
            <a
              className="font-bold text-cyan-400"
              href="https://www.linkedin.com/in/giovana-windberg-403281239/"
              target="_blank"
              rel="noreferrer"
            >
              Giovana
            </a>
          </p>
        </section>
      </div>
    </footer>
  )
}
