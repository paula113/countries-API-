import React, { ReactNode } from 'react'
import { FlagCardProps } from './types'

const FlagCard: React.FC<FlagCardProps> = ({ flagInfo, setCardDetails }) => {
  const {
    name = '',
    population = '',
    region = '',
    capital = '',
    flags
  } = flagInfo || {}

  const handleCardClick = () => {
    setCardDetails(flagInfo)
    return
  }

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
      <p className="mt-1 block text-lg leading-tight font-medium text-black dark:text-gray-50 hover:underline">
        {name}
      </p>
    )
  }

  const getFlagImgView = (): ReactNode => {
    return (
      <img
        className="h-36 max-h-36 min-w-36 w-full object-cover"
        src={flags?.svg}
        alt={name}
      />
    )
  }

  const getCardBtnView = (): ReactNode => (
    <button
      className="absolute  w-full h-full top-0"
      onClick={handleCardClick}
    ></button>
  )

  return (
    <div className="relative w-full md:max-w-60 mx-auto overflow-hidden rounded-xl bg-white dark:bg-gray-800 mb-6 shadow-md md:max-w-2x1">
      {getFlagImgView()}
      <div className="p-4">
        {getFlagNameView()}
        {getCardDetailsView('Population', population)}
        {getCardDetailsView('Region', region)}
        {getCardDetailsView('Capital', capital)}
      </div>
      {getCardBtnView()}
      {/* {getDetailsView()} */}
    </div>
  )
}

export default FlagCard
