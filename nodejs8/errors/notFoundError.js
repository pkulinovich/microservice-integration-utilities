const AppError = require('./AppError');

class NotFoundError extends AppError {
    constructor(message) {
        super(404, 'not_found', message || 'Not found');
    }
}

module.exports = NotFoundError;