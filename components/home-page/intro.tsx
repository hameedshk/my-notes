import { Twemoji } from '~/components/ui/twemoji'

export function Intro() {
  return (
    <p>
      I am a product owner and a hobbyist software developer from India
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-india" />
      </span>
    </p>
  )
}
