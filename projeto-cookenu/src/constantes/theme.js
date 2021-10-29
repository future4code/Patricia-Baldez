import {createMuiTheme} from "material-ui-core/styles"
import { neutraColor, primaryColor } from "./colors"

const theme = createMuiTheme ({
    palette:{
        primary: {

            main: primaryColor,
            contrastText: "white",
        },
        text: {
            primary: neutraColor
        }
    }
})
export default theme