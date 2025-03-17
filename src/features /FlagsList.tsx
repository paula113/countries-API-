import { ChangeEvent, ReactNode, useState } from 'react'
import dataJson from '../services/data.json'
import FlagCard from '../components/FlagCard/FlagCard'
import { flagInfoProps as FlagInfo } from '../components/FlagCard/types'

const FlagsList: React.FC = () => {
  const data: FlagInfo[] = dataJson as FlagInfo[]
  const regionOptions: string[] = [...new Set(data.map(({ region }) => region))]

  const [flagsData, setFlagsData] = useState(data)
  const [searchTerm, setSearchTerm] = useState('')

  const getCountriesListView = (): ReactNode =>
    flagsData.map((item) => <FlagCard key={item.name} flagInfo={item} />)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || ''
    setSearchTerm(value)

    const searchResult: FlagInfo[] =
      data.filter(
        ({ name }) => name.toLocaleLowerCase() === value.toLocaleLowerCase()
      ) || []
    setFlagsData([...searchResult])
  }

  const getSearchView = (): ReactNode => {
    return (
      <div className="mt-6 mb-6 relative w-full">
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
    const selectedRegion = e.target.value

    if (!selectedRegion) {
      setFlagsData(data)
      return
    }

    const filteredFlags: FlagInfo[] = data.filter(
      ({ region }) => region === selectedRegion
    )
    setFlagsData(filteredFlags)
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
          className="mb-6 text-gray-300 rounded-lg h-10 p-2 dark:bg-gray-800"
          defaultValue=""
          onChange={handleOnChangeFilter}
        >
          <option value="">Filter by region</option>
          {getOptionsView()}
        </select>
      </>
    )
  }

  return (
    <div className="flex flex-col p-6 w-full">
      {getSearchView()}
      {getSelectView()}
      <div className="flex flex-col md:bg-slate-500 md:flex-wrap md:flex-row gap-2 justify-center">
        {getCountriesListView()}
      </div>
    </div>
  )
}

export default FlagsList
