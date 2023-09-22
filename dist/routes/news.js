"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const NewsController_1 = __importDefault(require("../app/controllers/NewsController"));
// newsController.index
router.get('/create', NewsController_1.default.create);
router.post('/store', NewsController_1.default.store);
router.get('/:id/edit', NewsController_1.default.edit);
router.put('/:id', NewsController_1.default.update);
router.delete('/:id', NewsController_1.default.delete);
router.get('/:slug', NewsController_1.default.show);
exports.default = router;
