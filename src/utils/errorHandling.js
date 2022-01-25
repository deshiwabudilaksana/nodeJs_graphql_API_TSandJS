import { errorType } from './errorConstant';

const getErrorCode = (errorName) => {
    return errorType[errorName];
};

module.exports = getErrorCode;
