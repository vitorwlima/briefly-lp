type Props = {
  title: string
  text: string
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string
      titleId?: string
    } & React.RefAttributes<SVGSVGElement>
  >
}

export const Benefit: React.FC<Props> = ({ title, text, Icon }) => {
  return (
    <div className="rounded-md bg-white p-5 sm:max-w-[40%]">
      <header className="flex items-center gap-2">
        <div className="grid place-items-center rounded-md bg-cyan-100 p-1">
          <Icon className="h-5 w-5 text-cyan-500" />
        </div>
        <h3 className="text-xl font-bold text-black">{title}</h3>
      </header>
      <p className="mt-4 text-black">{text}</p>
    </div>
  )
}
