import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary'
}

export const Button: React.FC<Props> = ({ children, variant, ...props }) => {
  return (
    <button
      className={clsx(
        'rounded-lg border bg-cyan-900 px-3 py-2 font-bold transition-opacity hover:opacity-80 sm:px-4 md:px-6 md:py-3',
        {
          'border-white bg-white text-zinc-900': variant === 'primary',
          'border-cyan-500 bg-zinc-900 text-white': variant === 'secondary',
        },
      )}
      {...props}
    >
      {children}
    </button>
  )
}
