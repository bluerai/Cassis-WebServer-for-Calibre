'use strict'; 

import { Router } from 'express';

import {
  startAction, listAction, bookAction, fileAction, coverListAction, coverBookAction,
  infoAction, countAction, dbAction, tagsAction, ccAction, logLevelAction
} from './controller.js';

const router = Router();

router.get('/', startAction);

router.post('/list/:type?', listAction);
router.post('/book', bookAction);
router.get('/tags/:tagId', tagsAction);
router.get('/cc/:ccNum/:ccId', ccAction);
router.get('/info', infoAction);
router.get('/log/:level', logLevelAction);
router.get('/:type/:id', startAction);
router.get('/file/:format/:id', fileAction);
router.get('/cover/list/:id', coverListAction);
router.get('/cover/book/:id', coverBookAction);

//Externe API-Calls
router.get('/count', countAction);
router.get('/connectdb', dbAction);
router.get('/unconnectdb', dbAction);

export { router };
