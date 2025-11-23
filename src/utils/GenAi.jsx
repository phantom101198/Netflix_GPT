import { GoogleGenAI } from "@google/genai";
import { GENAI_KEY } from "./Constant";

const ai = new GoogleGenAI({ apiKey: GENAI_KEY });

export default ai;
