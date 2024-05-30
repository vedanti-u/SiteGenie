<div align="center">
<a href="">
    <img alt="comet" src="assets/sitegenie-7.png" height=160 width=550>
</a>
</div>
</br>
<div>
<div align="center">

![Next JS](https://img.shields.io/badge/Next-black?style=plastic&logo=next.js&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=plastic&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=plastic&logo=express&logoColor=%2361DAFB)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=plastic&logo=javascript&logoColor=F7DF1E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=plastic&logo=tailwind-css&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=plastic&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=plastic&logo=supabase&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991.svg?style=plastic&logo=OpenAI&logoColor=white)
![LangChain](https://img.shields.io/badge/Langchain-green)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=plastic&logo=amazon-aws&logoColor=white)
![Serverless](https://img.shields.io/badge/Serverless-red)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=plastic&logo=githubactions&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=plastic&logo=postman&logoColor=white)
<br/>
<br/>

</div>

</div align="left" >

## About SiteGenie

**SiteGenie** is an innovative AI chatbot meticulously designed to enhance website interactions. Trained on user-provided links, this advanced chatbot seamlessly integrates with websites, delivering instant responses and boosting user engagement. It expedites interactions by eliminating time-consuming searches, significantly improving operational efficiency.
</br>

## Features

- **Tailored Data Training:** Our chatbot receives specialized training from carefully selected web pages, nurturing a vast knowledge base for GPT model proficiency.
- **Enhanced Knowledge Base:** Ingest website content into a searchable knowledge base to ensure a robust reference source for chatbot training, enabling accurate and contextually relevant responses.
- **Instantaneous Responses:** The chatbot promptly addresses user queries regarding website content, eliminating the need for human intervention and significantly reducing user wait time.
- **Effortless Integration:** Easily embed the chatbot directly onto any website using HTML iframe embedding, with advanced customization options and theming to enrich user satisfaction and engagement.
- **Responsive and Efficient Design:** Implemented as an end-to-end solution that works on multiple screen sizes with the help of Tailwind CSS, enabling users to efficiently accomplish tasks without navigating multiple pages.
  </br>

> SiteGenie aims to deliver an intuitive and effective solution for crafting, personalizing, and launching AI-driven chatbots, ultimately elevating user engagement and satisfaction across various domains and industries.

<h1><img src="assets/sitegenie-small.png" alt="Comet Logo" width="35" height="35"> Try SiteGenie</h1>

`Link to install`
Screenshot of landing page

## 💡 How SiteGenie works ?

```mermaid
sequenceDiagram
    participant User
    participant System
    participant Langchain
    participant OpenAI
    participant Supabase
    participant AWS Lambda

    User ->> System: Request website URL
    System ->> Langchain: Perform recursive data scraping
    Langchain ->> System: Return scraped content
    System ->> System: Clean content (Stemming, Lemmatization)
    System ->> System: Split content into documents
    System ->> OpenAI: Create vector embeddings
    OpenAI ->> System: Return vector embeddings
    System ->> Supabase: Add vector embeddings to vector store
    Supabase ->> System: Confirm addition
    System ->> User: System ready to process prompts

    User ->> System: Send prompt with context
    System ->> OpenAI: Generate response using vector store context
    OpenAI ->> System: Return generated response
    System ->> User: Return response

    Note over System, AWS Lambda: Deployment

    System ->> AWS Lambda: Deploy backend on AWS Lambda
    AWS Lambda ->> System: Serverless deployment allows on-demand execution

    Note over System: Environments

    System ->> AWS Lambda: Deploy code to staging
    System ->> AWS Lambda: Deploy tested code to production

    Note over System: Integration Testing

    System ->> System: Run integration tests for API
    System ->> System: Automate deployment script
    System ->> System: Clone repo, run tests locally, deploy to staging, run tests again

    Note over System: GitHub Actions

    System ->> GitHub Actions: Run integration tests on every commit
    GitHub Actions ->> System: Ensure code quality and functionality

    Note over System: Repositories

    System ->> System: Maintain frontend and backend repositories
    System ->> System: Secure main branch with branch protection rules
    System ->> System: Require pull request and code review for merges to main branch

```
