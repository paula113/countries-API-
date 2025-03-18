// import React from 'react'
import { ReactNode } from 'react'
import { flagInfoProps } from '../FlagCard/types'

interface DialogProps {
  cardDetails: flagInfoProps
  setCardDetails: (flag: flagInfoProps) => void
}

const Dialog: React.FC<DialogProps> = ({ cardDetails, setCardDetails }) => {
  if (!cardDetails) return null

  const {
    name = '',
    population = '',
    region = '',
    capital = '',
    flags = [],
    topLevelDomain = [],
    subregion = '',
    borders = [],
    nativeName = '',
    currencies = [],
    languages = []
  } = cardDetails

  const domain: string = topLevelDomain.join(', ')
  const currency: string = currencies
    .map(({ name }: { name: string }) => name)
    .join(', ')
  const language: string = languages
    .map(({ name }: { name: string }) => name)
    .join(', ')

  const handleClose = () => {
    setCardDetails({})
  }

  const getFlagNameView = (): ReactNode => {
    return (
      <h2 className="mt-6 block text-lg leading-tight font-medium text-black dark:text-gray-50 hover:underline">
        {name}
      </h2>
    )
  }

  const getFlagImgView = (): ReactNode => {
    return (
      <img
        className="h-48 md:h-auto min-w-36 w-full object-cover md:w-3/6"
        src={flags?.svg}
        alt={name}
      />
    )
  }

  const getCardDetailsView = (
    name: string,
    value: string | number
  ): ReactNode => {
    if (!name || !value) return null

    return (
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        <strong className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-300">
          {name}
          {': '}
        </strong>
        {value}
      </p>
    )
  }

  const getTagView = (value: string): ReactNode => {
    if (!value) return null

    return (
      <p className="mt-2 text-gray-700 dark:text-gray-300 py-2 px-4 shadow w-fit bg-white dark:bg-gray-800">
        {value}
      </p>
    )
  }

  const getTagsView = (): ReactNode => {
    if (!borders.length) return null

    const tagView = borders.map(getTagView)
    return (
      <div className="mt-6 md:w-full flex flex-col">
        <h5 className="text-gray-700 dark:text-gray-300">
          <strong>Border Countries</strong>
        </h5>
        <div className="flex flex-wrap gap-2">{tagView}</div>
      </div>
    )
  }

  const open = Object.values(cardDetails).length !== 0

  return (
    <dialog
      open={open}
      className="fixed top-16 left-0 w-full h-full bg-gray-50 dark:bg-gray-900 p-6 overflow-auto z-10"
    >
      <button
        className="mb-4 text-base text-gray-700 relative pl-6 dark:text-gray-300"
        onClick={handleClose}
      >
        <strong className="absolute left-0 text-2xl leading-6">{'← '}</strong>
        {'Back'}
      </button>

      <div className="flex flex-col md:flex-row md:justify-between md:gap-12">
        {getFlagImgView()}
        <div className="md:w-3/6 ">
          {getFlagNameView()}
          <div className="md:w-full md:flex md:flex-row md:gap-5">
            <div>
              {getCardDetailsView('Native Name', nativeName)}
              {getCardDetailsView('Population', population)}
              {getCardDetailsView('Region', region)}
              {getCardDetailsView('Sub Region', subregion)}
            </div>
            <div>
              {getCardDetailsView('Capital', capital)}
              {getCardDetailsView('Top Level Domain', domain)}
              {getCardDetailsView('Currency', currency)}
              {getCardDetailsView('Languages', language)}
            </div>
          </div>
          {getTagsView()}
        </div>
      </div>
    </dialog>
  )
}

export default Dialog
