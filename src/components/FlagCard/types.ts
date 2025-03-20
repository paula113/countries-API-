type FlagImgProps = {
  svg: string
}

export interface FlagCurrenciesProps {
  name: string
}

export interface FlagLanguagesProps {
  name: string
}

export interface FlagInfoProps {
  name: string
  population: number
  region: string
  capital: string
  flags: FlagImgProps
  topLevelDomain: string[]
  subregion: string
  borders: string[]
  nativeName: string
  currencies: FlagCurrenciesProps[]
  languages: FlagLanguagesProps[]
}

export interface FlagCardProps {
  flagInfo: FlagInfoProps,
  setCardDetails: (flag: FlagInfoProps) => void  
}