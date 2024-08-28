import { Request, Response } from 'express';

import { asyncHandler } from '../utils/async-handler.util';

import { findQuestions } from '../services/question.service';

export const getQuestions = asyncHandler(async (req: Request, res: Response) => {
    try {
        res.json(await findQuestions());
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});