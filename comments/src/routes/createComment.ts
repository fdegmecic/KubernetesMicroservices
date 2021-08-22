import express, {Request, Response} from 'express';
import {NotFoundError, requireAuth, validateRequest} from "@fdfipubook/common";
import {body} from "express-validator";
import {Comment} from "../models/comment";
import {Post} from "../models/post";

const router = express.Router();

router.post('/api/comments', requireAuth, [
    body('commentText')
        .not()
        .isEmpty()
        .withMessage('Comment text is required'),
    body('postId')
        .not()
        .isEmpty()
        .withMessage('Postid is required'),
], validateRequest, async (req: Request, res: Response) => {
    const {commentText, postId} = req.body;

    const post = await Post.findById(postId);
    if(!post){
        throw new NotFoundError();
    }

    const comment = Comment.build({
        commentText,
        post,
        userId: req.currentUser!.id,
        created: new Date(),
    })

    await comment.save();

    res.status(201).send(comment);
})


export {router as createCommentRouter}