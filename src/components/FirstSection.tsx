import { CallToActionButtons } from './CallToActionButtons'
import { Header } from './Header'

export const FirstSection: React.FC = () => {
  return (
    <div className="bg-sky-600 bg-[url('/stars-bg.svg')] bg-cover bg-no-repeat pb-20">
      <Header />
      <section className="lp-container mt-12 flex flex-col items-center  justify-center text-white">
        <h2 className="max-w-xs text-center font-archivo text-2xl font-semibold tracking-wide sm:max-w-md sm:text-3xl lg:text-4xl">
          <span className="relative before:absolute before:bottom-0 before:-z-10 before:h-2 before:w-full before:bg-sky-400 before:content-['']">
            Supercharge
          </span>{' '}
          your social media growth today
        </h2>

        <p className="mt-10 max-w-xl text-center">
          Transform your social media game. Maximize your ROI, improve your
          online visibility, and grow your audience. Start supercharging your
          growth today.
        </p>

        <CallToActionButtons />
      </section>
    </div>
  )
}
