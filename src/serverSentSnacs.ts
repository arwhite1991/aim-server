import assert from 'assert';
import { buildSnac } from './snacUtils';

/**
 * @see http://iserverd1.khstu.ru/oscar/snac_17_07.html
 * @param authKey Key for client to use when encrypting password. Size should not exceed u32 int
 * @param reqID   SNAC Request ID from client auth request
 */
export function authKeyResponseSnac(authKey: string, reqID: number) {
    assert(authKey.length < 0xffff, 'authKey size exceeds u32 int');

    const authKeyBuf = Buffer.from(authKey, 'ascii');
    const authKeyLen = Buffer.alloc(32);
    authKeyLen.writeUInt32BE(authKeyBuf.byteLength, 0);

    return buildSnac({
        family: 0x17,
        subtype: 0x7,
        reqID,
        data: Buffer.concat([authKeyLen, authKeyBuf]),
    });
}
