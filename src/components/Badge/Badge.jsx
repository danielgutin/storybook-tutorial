import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

const Badge = ({
    type = 'default',
    text,
    radius = 20,
    size = 'sm',
    onClick,
    fullWidth = false
}) => {

    const badgeContainerStyles = useMemo(() => {
        // list of classes attached to the badge container
        let cssClasses = [];

        // badge base classname
        cssClasses.push('badge');

        // --- badge size
        if(['sm', 'md', 'lg'].includes(size)) {
            cssClasses.push(`badge-size-${size}`)
        // defaults to sm when not supported size is provided
        } else {
            cssClasses.push(`badge-size-sm`)
        }

        // --- badge color
        if(['default', 'warning', 'info', 'success', 'error'].includes(type)) {
            cssClasses.push(`badge-type-${type}`)
        // defaults to default when not supported size is provided
        } else {
            cssClasses.push(`badge-type-default`)
        }        

        // --- full width
        if(fullWidth) {
            cssClasses.push(`badge-full-width`);
        }

        // --- clickable styles when onClick is provided
        if(onClick) {
            cssClasses.push(`badge-actionable`);
        }

        return cssClasses.join(' ');

    }, [size, type, fullWidth, onClick])



    return (
        <div onClick={() => onClick?.()} className={badgeContainerStyles} style={{
            // check if valid radius, otherwise put default 4px
            borderRadius: (typeof radius == 'number' && radius) || 4
        }}>
            <span>{text}</span>
        </div>
    )
}

Badge.propTypes = {
    /** Content of the Badge */
    text: PropTypes.string.isRequired,
    /** will affect the Badge color and background color */
    type: PropTypes.oneOf(['default', 'warning', 'info', 'success', 'error']),
    /** The border radius of the Badge */
    radius: PropTypes.number,
    /** Badge size, should be one of the following types */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /** should the Badge take 100% width of the parents content */
    fullWidth: PropTypes.bool,
    /** callback to execute on click */
    onClick: PropTypes.func
}

export default Badge;
