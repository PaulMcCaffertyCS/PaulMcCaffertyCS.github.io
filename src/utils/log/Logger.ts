export default class Logger {
    static d(tag: string, message: string) {
        console.log(`[DEBUG]/${tag}: ${message}`);
    }

    static i(tag: string, message: string) {
        console.log(`[INFO]/${tag}: ${message}`);
    }

    static w(tag: string, message: string) {
        console.log(`[WARNING]/${tag}: ${message}`);
    }

    static e(tag: string, message: string) {
        console.log(`[ERROR]/${tag}: ${message}`);
    }
}