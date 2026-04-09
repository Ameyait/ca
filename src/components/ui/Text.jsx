'use client'

import clsx from 'clsx'

export default function Text({
  as = 'p',        // p | span | h1 | h2 | h3 | h4 | h5 | h6
  variant = 'body',
  className,
  children,
  ...props
}) {
  const Component = as

  const variants = {
    h1: 'text-3xl md:text-4xl xl:text-5xl font-bold text-brand-primary leading-tight',
    h2: 'text-center text-2xl md:text-3xl font-semibold text-brand-primary mb-2',
    h3: 'text-primary font-heading font-bold  mb-2',
    h4: 'text-2xl text-brand-primary font-bold',
    h5: 'text-sm font-[400]',
    h6: '',

    /* New Added */
    p: 'text-xs leading-4 text-text-secondary',
    span: 'text-sm md:text-base text-gray-700',

    body: 'text-sm text-paragraph',
    muted: 'text-xs text-gray-500',
    label: 'text-xs font-medium text-gray-600',
  }

  return (
    <Component
      className={clsx(
        variants[variant] || variants[as] || variants.body,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}