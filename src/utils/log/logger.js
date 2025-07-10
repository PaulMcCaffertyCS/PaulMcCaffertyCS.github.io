export default class Logger {
    /**
     * @param {String} tag 
     * @param {String} message 
     */
    static d(tag, message) {
        console.log(`[DEBUG]/${tag}: ${message}`)
    }

    /**
     * @param {String} tag 
     * @param {String} message 
     */
    static i(tag, message) {
        console.log(`[INFO]/${tag}: ${message}`)
    }

    /**
     * @param {String} tag 
     * @param {String} message 
     */
    static w(tag, message) {
        console.log(`[WARNING]/${tag}: ${message}`)
    }

    /**
     * @param {String} tag 
     * @param {String} message 
     */
    static e(tag, message) {
        console.log(`[ERROR]/${tag}: ${message}`)
    }
}