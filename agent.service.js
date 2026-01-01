import { Agent, run, tool } from "@openai/agents";
import axios from "axios";
import z from "zod";
import 'dotenv/config'

const getGitStats = tool({
  name: "get git stats",
  description: "returns the git following of the user",
  parameters: z.object({
    userName: z.string().describe("Name of the user"),
  }),
  execute: async function ({ userName }) {
    const url = `https://api.github.com/users/${userName}`;
    const res = await axios.get(url);
    const user = res.data;
    return `The followers of ${userName} is : ${user.followers}`;
  },
});

const getGitAgent = new Agent({
  name: "get git stats agent",
  instructions:
    "Youre an agent who takes the github username of an user and returns the git stats of the username",
  tools: [getGitStats],
});

const query = "Hey agent, my github id is Asad-bot07";
run(getGitAgent, query).then((result) => {
  console.log(result.finalOutput);
});
