import { CallToActionButtons } from './CallToActionButtons'

export const ThirdSection: React.FC = () => {
  return (
    <div className="bg-zinc-700">
      <section className="lp-container flex flex-col items-center py-20">
        <h2 className="max-w-sm text-center text-2xl font-bold text-white sm:max-w-xl sm:text-3xl lg:max-w-2xl lg:text-4xl">
          Start supercharging your growth with short form content{' '}
          <span className="text-sky-400">today</span>
        </h2>

        <CallToActionButtons />
      </section>
    </div>
  )
}
