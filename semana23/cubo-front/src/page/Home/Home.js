import ChartPieData from '../../components/ChartPieData/ChartPieData'
import Header from '../../components/Header/Header'
import TableData from '../../components/TableData/TableData'
import TitleData from '../../components/TitleData/TitleData'
import { SectionData } from './styled'

const Home = () => {
    return <div>
        <Header/>
        <TitleData/>
        <SectionData>
            <TableData/>
            <ChartPieData/>
        </SectionData>
    </div>
}
export default Home