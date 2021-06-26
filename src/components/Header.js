import PropTypes from 'prop-types'
import { AiOutlineCalculator } from "react-icons/ai"

const Header = ({ title }) => {

    return (
        <header className="header">
            <h1>{title} <AiOutlineCalculator size="20px"/> </h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Calculator",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;