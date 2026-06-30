import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type Direction = 'up' | 'left' | 'fade'

interface AnimateInProps {
  children: ReactNode
  delay?: number
  direction?: Direction
  className?: string
}

const hiddenClass: Record<Direction, string> = {
  up:   'opacity-0 translate-y-5',
  left: 'opacity-0 -translate-x-5',
  fade: 'opacity-0',
}

export function AnimateIn({ children, delay = 0, direction = 'up', className = '' }: AnimateInProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-y-0 translate-x-0' : hiddenClass[direction]}
        ${className}`}
    >
      {children}
    </div>
  )
}
