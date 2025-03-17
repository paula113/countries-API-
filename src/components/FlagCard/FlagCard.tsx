import React, { ReactNode } from 'react'
import { FlagCardProps } from './types'

const FlagCard: React.FC<FlagCardProps> = ({ flagInfo }) => {
  const {
    name = '',
    population = '',
    region = '',
    capital = '',
    flags
  } = flagInfo || {}

  const getCardDetailsView = (
    name: string,
    value: string | number
  ): ReactNode => {
    if (!name || !value) return null

    return (
      <p className="mt-2 text-gray-900 dark:text-gray-300">
        <strong className="text-sm font-semibold tracking-wide text-black dark:text-gray-300 uppercase">
          {name}
          {': '}
        </strong>
        {value}
      </p>
    )
  }

  const getFlagNameView = (): ReactNode => {
    return (
      <a
        href="#"
        className="mt-1 block text-lg leading-tight font-medium text-black dark:text-gray-50 hover:underline"
      >
        {name}
      </a>
    )
  }

  const getFlagImgView = (): ReactNode => {
    return (
      <img
        className="h-48 w-full object-cover md:h-auto "
        src={flags?.svg}
        alt={name}
      />
    )
  }

  return (
    <div className="w-full md:max-w-60 mx-auto overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 mb-6 shadow-md md:max-w-2x1">
      {getFlagImgView()}
      <div className="p-4">
        {getFlagNameView()}
        {getCardDetailsView('Population', population)}
        {getCardDetailsView('Region', region)}
        {getCardDetailsView('Capital', capital)}
      </div>
    </div>
  )
}

export default FlagCard
