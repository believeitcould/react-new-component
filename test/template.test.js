var loadTemplate = require('../bin/new').loadTemplate
var expect = require('chai').expect

describe('模板文件加载测试', function () {
    it('无分号', function () {
        expect(loadTemplate(undefined, 'Test')).to.not.match(/;/)
    })
})