import { ChangeEvent, ReactNode, useEffect, useState } from 'react'
import dataJson from '../../services/data.json'
import FlagCard from '../../components/FlagCard/FlagCard'
import { FlagInfoProps as FlagInfo } from '../../components/FlagCard/types'
import { FlagsListProps } from '../types'
import { useDebounce } from '../../hooks/utils'

const FlagsList: React.FC<FlagsListProps> = ({ setCardDetails }) => {
  const data: FlagInfo[] = dataJson as FlagInfo[]
  const regionOptions: string[] = [...new Set(data.map(({ region }) => region))]

  const [flagsData, setFlagsData] = useState(data)
  const [selectedRegion, setSelectedRegion] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedValue: string = useDebounce(searchTerm)

  const getDataResult = (val: string) => {
    const filteredFlags: FlagInfo[] = !selectedRegion
      ? flagsData
      : data.filter(({ region }) => region === (val || selectedRegion))
    return filteredFlags
  }

  const countryList = getDataResult('')

  const getCountriesListView = (): ReactNode =>
    countryList.map((item) => (
      <FlagCard
        key={item.name}
        flagInfo={item}
        setCardDetails={setCardDetails}
      />
    ))

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || ''
    setSearchTerm(value)
    return
  }

  const getSearchView = (): ReactNode => {
    return (
      <div className="relative w-full shadow rounded-lg md:w-3/6">
        <label htmlFor="site-search" className="absolute h-10 p-2">
          🔍
        </label>
        <input
          type="search"
          id="site-search"
          name="q"
          placeholder="Search for a country"
          className="w-full rounded-lg h-10 p-2 pl-10 dark:bg-gray-800"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    )
  }

  const handleOnChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    const val = e.target.value

    if (!val) {
      setFlagsData(data)
      setSelectedRegion('')
      return
    }

    setSearchTerm('')
    setSelectedRegion(val)
    const result = getDataResult(val)
    setFlagsData(result)
    return
  }

  const getSelectView = (): ReactNode => {
    const getOptionsView = (): ReactNode =>
      regionOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))

    return (
      <>
        <select
          name="pets"
          id="pet-select"
          className="text-gray-700 dark:text-gray-300 rounded-lg h-10 p-2 shadow dark:bg-gray-800 md:w-3/6"
          value={selectedRegion}
          onChange={handleOnChangeFilter}
        >
          <option value="">Filter by region</option>
          {getOptionsView()}
        </select>
      </>
    )
  }

  useEffect(() => {
    if (!debouncedValue) {
      setFlagsData(data)
      return
    }

    const searchResult: FlagInfo[] =
      data.filter(
        ({ name }) =>
          name.toLocaleLowerCase() === debouncedValue.toLocaleLowerCase()
      ) || []
    setFlagsData([...searchResult])
    setSelectedRegion('')

    return () => {}
  }, [debouncedValue, data])

  return (
    <div className="flex flex-col flex-auto p-6 w-full">
      <div className="flex flex-col gap-5 mb-6 md:flex-row md:justify-between md:gap-20">
        {getSearchView()}
        {getSelectView()}
      </div>
      <div className="flex flex-col md:flex-wrap md:flex-row gap-2 justify-center">
        {getCountriesListView()}
      </div>
    </div>
  )
}

export default FlagsList
