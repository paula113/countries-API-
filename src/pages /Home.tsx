import { ReactNode, useState } from 'react'
import Dialog from '../components/Dialog/Dialog'
import FlagsList from '../features /FlagsList/FlagsList'
import MainLayout from '../layouts/MainLayout'
import { FlagInfoProps } from '../components/FlagCard/types'

const Home: React.FC = () => {
  const [cardDetails, setCardDetails] = useState<FlagInfoProps | null>(null)

  const getDetailsView = (): ReactNode => {
    if (!cardDetails) return null
    return (
      <Dialog
        cardDetails={cardDetails || null}
        setCardDetails={setCardDetails}
      />
    )
  }

  return (
    <MainLayout>
      <FlagsList setCardDetails={setCardDetails} />
      {getDetailsView()}
      {/* <Dialog cardDetails={cardDetails} /> */}
    </MainLayout>
  )
}

export default Home
