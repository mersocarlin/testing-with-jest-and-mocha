import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

export const expect = chai.expect
export const spy = sinon.spy

export default expect
