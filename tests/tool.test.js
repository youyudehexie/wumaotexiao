import { toStyle } from '../tools.js';

describe('Tool#toStyle', () => {
    it('should return success', (done) => {
        const style = {
            lineHeight: 200,
            width: 100,
            height: '90px',
            position: 'absolute',
        }

        toStyle(style).should.equal('line-height: 200px;width: 100px;height: 90px;position: absolute;');
        done();
    })
})
