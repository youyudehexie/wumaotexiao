import { toStyle } from '../tools.js';

describe('Tool#toStyle', () => {
    it('should return success', (done) => {
        const style = {
            transform: 'translate3d(0, 0, 0)',
            lineHeight: 200,
            width: 100,
            height: '90px',
            position: 'absolute',
        }

        toStyle(style).should.equal('transform: translate3d(0, 0, 0);-webkit-transform: translate3d(0, 0, 0);-moz-transform: translate3d(0, 0, 0);-ms-transform: translate3d(0, 0, 0);line-height: 200px;width: 100px;height: 90px;position: absolute;');
        done();
    })
})
