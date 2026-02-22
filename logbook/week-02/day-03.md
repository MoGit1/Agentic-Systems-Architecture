## Episode 19: Functional Programming (Map, Filter, Reduce)
**Core Insight:** Stop thinking about "how to loop" and start thinking about "how to transform data."

### 1. Map() - The Transformer
- **Purpose:** Transforms every element in an array and returns a **new** array of the same length.
- **Architect Use-Case:** Converting a list of raw Azure CosmosDB documents into a format the LLM understands.

### 2. Filter() - The Gatekeeper
- **Purpose:** Returns a **new** array containing only the elements that pass a specific condition.
- **Architect Use-Case:** PII Scrubbing. Filtering out "Secret" or "Private" data from a dataset before sending it to an AI Agent.

### 3. Reduce() - The Accumulator 
- **Purpose:** Takes an entire array and "reduces" it down to a **single value** (Object, Number, or even another Array).
- **Architect Use-Case:** 1. **Token Counting:** Summing up the `totalTokens` used across a conversation.
    2. **Data Aggregation:** Finding the most frequent user intent in a log of 1,000 AI queries.


