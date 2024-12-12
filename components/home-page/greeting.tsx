import clsx from 'clsx'
import { Twemoji } from '~/components/ui/twemoji'

export function Greeting() {
  return (
    <div
      className={clsx(
        'font-greeting tracking-tight',
        'text-[20px] leading-[40px] md:text-[28px] md:leading-[50px]',
        'bg-clip-text text-transparent',
        'bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#14C9CB] to-lime-600',
        'dark:bg-gradient-to-l dark:from-[#14C9CB] dark:to-lime-600'
      )}
    >
      Hi, fellow! <Twemoji emoji="waving-hand" size="base" />
    </div>
  )
}
