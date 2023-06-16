import { ArrowTrendingUpIcon, PlayIcon } from '@heroicons/react/24/outline'
import { Benefit } from './Benefit'

const benefits = [
  {
    title: 'Content',
    text: 'We analyze your long-form content and take small pieces to create a high-virality strategy.',
    Icon: PlayIcon,
  },
  {
    title: 'Visibility',
    text: 'We are results-driven. You can expect to significantly increase the reach of your content before paying a single dollar.',
    Icon: ArrowTrendingUpIcon,
  },
]

export const SecondSection: React.FC = () => {
  return (
    <section className="bg-zinc-800">
      <section className="lp-container mt-10 flex flex-col items-center justify-center py-10 text-white">
        <h3 className="text-center font-bold text-cyan-500 sm:text-xl">
          WHY BRIEFLY
        </h3>

        <h1 className="mt-4 text-center text-2xl font-extrabold sm:text-3xl">
          Short Form Content Agency
        </h1>

        <p className="mt-10 max-w-2xl text-center">
          We take a tailored approach to meet your specific needs and maintain
          open communication to ensure clarity and transparency throughout the
          process. We clip your content and manage your accounts to gain
          visibility through TikTok, Instagram Reels and Youtube Shorts.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-stretch sm:gap-8">
          {benefits.map((benefit) => (
            <Benefit key={benefit.title} {...benefit} />
          ))}
        </div>
      </section>
    </section>
  )
}
