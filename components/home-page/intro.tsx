import { Twemoji } from '~/components/ui/twemoji'

export function Intro() {
  return (
    <p className="text-neutral-900 dark:text-neutral-200">
      A Software Engineer from India
      <span className="hidden font-medium">India</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-india" />
      </span>
    </p>
  )
}
