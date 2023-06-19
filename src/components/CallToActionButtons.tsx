import { Button } from './Button'

export const CallToActionButtons: React.FC = () => {
  return (
    <div className="mt-10 flex flex-col items-stretch justify-center gap-5 xs:flex-row xs:items-center">
      <Button variant="primary">Try 30 days trial</Button>
      <Button variant="secondary">Schedule a call</Button>
    </div>
  )
}
