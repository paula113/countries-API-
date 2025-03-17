export interface FlagImgProps {
  svg: string
}

export interface flagInfoProps {
  name: string
  population: number
  region: string
  capital: string
  flags: FlagImgProps
}

export interface FlagCardProps {
  flagInfo: flagInfoProps
}