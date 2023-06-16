import { Button } from './Button'

export const FirstSection: React.FC = () => {
  return (
    <section className="lp-container flex flex-col items-center justify-center py-10 text-white">
      <h2 className="max-w-xs text-center font-archivo text-2xl font-semibold tracking-wide sm:max-w-md sm:text-3xl lg:text-4xl">
        Supercharge your social media growth today
      </h2>

      <p className="mt-10 max-w-xl text-center">
        Transform your social media game. Maximize your ROI, improve your online
        visibility, and grow your audience. Start supercharging your growth
        today.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-5 xs:flex-row">
        <Button variant="primary">Try 30 days trial</Button>
        <Button variant="secondary">Schedule a call</Button>
      </div>
    </section>
  )
}
