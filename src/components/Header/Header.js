import PropTypes from 'prop-types';

export function Header(
    { 
        firstName = 'Guest',
        lastName =''
    } 
) {
    return (
        <h1>
            hello { firstName } {lastName}
        </h1>
    )
}

Header.propTypes = {
 
    firstName: PropTypes.string,
    lastName: PropTypes.string
}