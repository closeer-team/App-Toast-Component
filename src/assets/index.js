/* eslint-disable global-require */

const assets = {
    icons: {
        success: require('./icons/success.png'),
        danger: require('./icons/error.png'),
        warning: require('./icons/warning.png'),
        info: require('./icons/info.png'),
        close: require('./icons/close.png'),
    },
};

const {icons} = assets;

export {icons};
export default assets;
