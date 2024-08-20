import mongoose from "mongoose"

import type { IdProp } from "./ModelTypes"

export type PostSchemaType = {
  title: string,
  body: string,
  createdAt: Date,
  updatedAt: Date,
}

export type PostType = PostSchemaType & IdProp

const PostSchema = new mongoose.Schema<PostSchemaType>(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true
  }
)

const PostModel = (mongoose.models?.Post || mongoose.model("Post", PostSchema)) as mongoose.Model<PostSchemaType>

export default PostModel