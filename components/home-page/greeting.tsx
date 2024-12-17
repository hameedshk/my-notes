import clsx from 'clsx'
import { Twemoji } from '~/components/ui/twemoji'

export function Greeting() {
  return (
    <div
      className={clsx(
        'font-greeting tracking-tight',
        'text-[15px] leading-[40px] md:text-[28px] md:leading-[50px]',
        'bg-clip-text text-transparent',
        'bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#E54A66] to-[#FD6050]',
        'dark:bg-gradient-to-l'
      )}
    >
      Hi, I am Hameed! <Twemoji emoji="waving-hand" size="base" />
    </div>
  )
}
