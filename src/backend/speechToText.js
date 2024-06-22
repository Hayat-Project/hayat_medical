import { createClient } from "@deepgram/sdk";
import env from "../../env.js";

export const transcribeUrl = async (audioURL) => {
  // STEP 1: Create a Deepgram client using the API key
  const deepgram = createClient(env.DEEPGRAM_API_KEY);

  // STEP 2: Call the transcribeUrl method with the audio payload and options
  const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
    {
      url: audioURL,
    },
    // STEP 3: Configure Deepgram options for audio analysis
    {
      model: "nova-2",
      smart_format: true,
      punctuate: true,
      diarize: true,
    }
  );

  if (error) throw error;
  // STEP 4: Print the results
  // result.results.channels[0].alternatives[0].transcript --> alternatives - transcript
  // result.results.channels[0].alternatives[0].paragraphs.transcript --> diarize transcript
  console.log(result.results.channels[0].alternatives[0].transcript);
  if (!error) return result.results.channels[0].alternatives[0].transcript;
  else return { depth: null };
};
