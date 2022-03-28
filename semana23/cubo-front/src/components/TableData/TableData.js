
import { useContext } from "react"
import { GlobalContext } from "../../contexts/global/GlobalContext"
import { ContainerTableData } from "./styled"

const TableData = () => {
    const { states } = useContext(GlobalContext)
 
    return <ContainerTableData>
        <tr>
            <th></th>
            <th className="row-name">First Name</th>
            <th className="row-name">Last Name</th>
            <th className="row-participation">Participation</th>
        </tr>
        {
            states.users.map((user, index) => {
                return <tr key={user.id}>
                    <td className="row-number">{index + 1}</td>
                    <td className="row-name">{user.firstName}</td>
                    <td className="row-name">{user.lastName}</td>
                    <td className="row-participation">{user.participation}%</td>
                </tr>
            })
        }
    </ContainerTableData>
}
export default TableData