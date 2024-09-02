import { Schema, model, models } from "mongoose";
// Define how the prompt should look like
const PromptSchema = new Schema({
  creator: {
    // this is a reference to the User
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    reqiured: [true, "Prompt is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
