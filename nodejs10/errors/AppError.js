/** AppError as the base class for application-defined exceptions */
class AppError extends Error {

    /**
     * @constructor
     * @param {Number} status
     * @param {String} code
     * @param {String} message
     * @param {String} target
     * @param {Object} source
     */

    constructor(status, code, message, target, source) {
        // Calling parent constructor of base Error class.
        super(message);

        this.target = target || 'common';

        this.source = source || {};

        const constructorName = this.constructor.name;

        this.code = code || constructorName.toLowerCase();

        // `404` is the default value if not specified.
        this.status = status || 500;

        // This clips the constructor invocation from the stack trace.
        Error.captureStackTrace(this, this.constructor);
    }

    /**
     * Process "JSON" response
     * @return {Object}
     */

    toJson() {
        return {
            code: this.code,
            target: this.target,
            message: this.message,
            source: this.source,
        };
    }
}

module.exports = AppError;
