import { InlineWidget } from 'react-calendly'

export const CalendarSection: React.FC = () => {
  return (
    <section className="bg-sky-600 p-2">
      <InlineWidget
        url="https://calendly.com/vitor-briefly/30min"
        pageSettings={{
          backgroundColor: '#27272a',
          primaryColor: '#22d3ee',
          textColor: '#ffffff',
        }}
        styles={{
          height: '660px',
        }}
      />
    </section>
  )
}
