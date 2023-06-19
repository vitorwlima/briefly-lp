import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary'
}

export const Button: React.FC<Props> = ({ children, variant, ...props }) => {
  const handleClick = () => {
    document?.getElementById('calendar')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <button
      className={clsx(
        'rounded-md border px-6 py-3 font-bold transition-opacity hover:opacity-80 md:px-8',
        {
          'border-white bg-white text-zinc-900': variant === 'primary',
          'border-white bg-transparent text-white': variant === 'secondary',
        },
      )}
      {...props}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
