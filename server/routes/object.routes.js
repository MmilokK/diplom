const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const objectController = require('../controllers/ObjectController')

router.post('/fund', authMiddleware, objectController.createFund)
router.get('/fund', authMiddleware, objectController.getFund)
router.delete('/fund/:id', authMiddleware, objectController.deleteFund)
router.put('/fund/:id', authMiddleware, objectController.updateFund)

router.post('/collection', authMiddleware, objectController.createCollection)
router.get('/collection', authMiddleware, objectController.getCollection)
router.delete('/collection/:id', authMiddleware, objectController.deleteCollection)
router.put('/collection/:id', authMiddleware, objectController.updateCollection)

router.post('/document', authMiddleware, objectController.createDocument)
router.get('/document', authMiddleware, objectController.getDocument)
router.delete('/document/:id', authMiddleware, objectController.deleteDocument)
router.put('/document/:id', authMiddleware, objectController.updateDocument)

router.post('/section', authMiddleware, objectController.createSection)
router.get('/section', authMiddleware, objectController.getSection)
router.delete('/section/:id', authMiddleware, objectController.deleteSection)
router.put('/section/:id', authMiddleware, objectController.updateSection)

router.post('/attachment', authMiddleware, objectController.createAttachment)
router.get('/attachment', authMiddleware, objectController.getAttachment)
router.delete('/attachment/:id', authMiddleware, objectController.deleteAttachment)
router.put('/attachment/:id', authMiddleware, objectController.updateAttachment)


module.exports = router