/** @type {import('jest').Config} */
const config = {
    clearMocks: true,
    collectCoverage: true,
    setupFilesAfterEnv: ['./setup-jest.js'],
};

module.exports = config;
