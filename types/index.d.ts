import TCEncoder from './encoder';
declare global {
    interface Window {
        TCCompress: typeof TCEncoder;
    }
}
