import PropTypes from "prop-types"
import styles from "./Spinner.module.css"

const Spinner = ({ size }) => {
	const style = {
		small: {
			width: "28px",
			height: "28px"
		},
		medium: {
			width: "56px",
			height: "56px"
		},
		large: {
			width: "112px",
			height: "112px"
		}
	}
	return <div className={styles.spinner} style={style[size]}></div>
}

Spinner.propTypes = {
	size: PropTypes.oneOf("small", "medium", "large")
}

Spinner.defaultProps = {
	size: "medium"
}

export default Spinner
