import React from 'react';

import BaseToast from './base';
import {icons} from '../assets';
import colors from '../colors';

function WarningToast(props) {
    return (
        <BaseToast
            {...props}
            style={{borderLeftColor: colors.warningColor}}
            leadingIcon={icons.warning}
        />
    );
}

WarningToast.propTypes = BaseToast.propTypes;

export default WarningToast;
