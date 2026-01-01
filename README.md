# GitHub Stats AI Agent 

## Overview

This project is an **AI agent built using the OpenAI Agent SDK** that retrieves public GitHub user statistics through natural language queries.  
The agent understands user input, invokes the GitHub REST API as a tool, and returns relevant insights such as a user’s **follower count**. The design is **extensible**, allowing additional GitHub-related information to be added easily.

---

## Features

- AI agent powered by the OpenAI Agent SDK  
- Tool-based architecture using OpenAI’s `tool()` interface  
- GitHub API integration via Axios  
- Natural language understanding to extract GitHub usernames  
- Fetches GitHub follower count  
- Easily extensible to include repositories, stars, languages, and more  

---

## Tech Stack

- **JavaScript**
- **Node.js**
- **OpenAI Agent SDK**
- **Axios**
- **Zod** (tool parameter validation)
- **dotenv** (environment variable management)

---

## How It Works

1. The user provides a natural language query containing a GitHub username.
2. The AI agent interprets the query and decides which tool to use.
3. The agent calls the GitHub API using the selected tool.
4. The result is processed and returned as a readable response.

**Agent Flow:**
```
User Input → Agent Reasoning → Tool Invocation → GitHub API → Final Output
```
---

## Environment Setup

1. Install dotenv
```
npm i dotenv
```
2. Create a .env file in the root directory:
```
OPENAI_API_KEY=your_openai_api_key = add your api key
```
## Contact

I am open to discussing opportunities and collaborations. Connect with me:

- **Email:** [techie.asad.dev@gmail.com](mailto:techie.asad.dev@gmail.com)  
- **GitHub:** [@asad-bot07](https://github.com/Asad-bot07)  
- **LinkedIn:** [Asad Hussain](https://www.linkedin.com/in/asad-hussain-765502319/)  

---

## Portfolio Link

Explore my work and professional journey: [https://asadtechdev.vercel.app](https://asadtechdev.vercel.app/)