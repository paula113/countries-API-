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
  const currency: string = currencies.map((n: { name: string }) => n).join(', ')
  const language: string = languages.map((n: { name: string }) => n).join(', ')

  const handleClose = () => {
    // setCardDetails({})
  }

  const getFlagNameView = (): ReactNode => {
    return (
      <h3 className="mt-1 block text-lg leading-tight font-medium text-black dark:text-gray-50 hover:underline">
        {name}
      </h3>
    )
  }

  const getFlagImgView = (): ReactNode => {
    return (
      <img
        className="h-48 max-h-48 min-w-36 w-full object-cover md:h-full md:w-3/6"
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
      <p className="mt-2 text-gray-700 dark:text-gray-300 py-2 px-4 shadow w-fit">
        {value}
      </p>
    )
  }

  const getTagsView = (): ReactNode => {
    if (!borders.length) return null

    const tagView = borders.map(getTagView)
    return (
      <div className="mt-6">
        <h5>
          <strong>Border Countries</strong>
        </h5>
        <div className="flex flex-wrap">{tagView}</div>
      </div>
    )
  }

  //  const open = Object.keys(cardDetails).length !== 0

  return (
    <dialog
      open
      className="absolute top-16 bg-gray-50 dark:bg-gray-900 min-h-screen min-w-full p-6"
    >
      <button className="my-4 p-2" onClick={handleClose}>
        {'< Back'}
      </button>

      <div className="flex flex-col md:flex-row md:justify-between md:gap-12">
        {getFlagImgView()}
        <div className="md:w-3/6">
          {getFlagNameView()}
          {getCardDetailsView('Native Name', nativeName)}
          {getCardDetailsView('Population', population)}
          {getCardDetailsView('Region', region)}
          {getCardDetailsView('Sub Region', subregion)}
          {getCardDetailsView('Capital', capital)}
          {getCardDetailsView('Top Level Domain', domain)}
          {getCardDetailsView('Currency', currency)}
          {getCardDetailsView('Languages', language)}
          {getTagsView()}
        </div>
      </div>
    </dialog>
  )
}

export default Dialog
