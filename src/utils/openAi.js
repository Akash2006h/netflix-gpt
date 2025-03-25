import OpenAI from 'openai';
import {OPENAI_KEY} from "./constant.js"
const openai = new OpenAI({
  apiKey: OPENAI_KEY, // For Vite
  dangerouslyAllowBrowser: true // ONLY for development!
});

export default openai;
