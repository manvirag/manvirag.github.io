Scalability is usually the first thing people think of. But in an event-driven system (e.g., a producer, pipeline, and consumer), there are other use-case-specific **NFRs (Non-Functional Requirements)** that need to be considered.


![](/markdown/blog14/nfr.png)
---

### 1. Message Ordering
The first question is: **do events need to be processed in the same order they were produced?**

- In cases like **financial transactions**, **inventory updates**, or **workflows** where later steps depend on earlier ones, **strict ordering** is required.  
- In systems like **analytics** or **recommendations**, order often doesn’t matter.  

**Some solutions:**
- Use **partitions** so that events with the same key (e.g., user ID) always go to the same partition. This preserves order for that key while allowing scaling.  
- A **single-threaded consumer** guarantees strict order, but at the cost of throughput.  

**Tradeoff**: Stronger ordering reduces parallelism, which affects performance.

---

### 2. Delivery Guarantees
Another key question: **what reliability should the system provide when delivering events?**

- **At-least-once**  
  - No events are lost.  
  - Messages are retried until processed, but **duplicates may happen**.  
  - DLQ (Dead Letter Queue) can be used for manual intervention and retry.  

- **At-most-once**  
  - Messages are delivered **at most once**.  
  - If delivery fails, they’re lost.  
  - Fast but less reliable, useful for **non-critical data delivery**.  

- **Exactly-once**  
  - Every message is processed once, with no duplicates or losses.  
  - Usually requires **distributed transactions**, **deduplication**, or **idempotent consumers**.  
  - Hardest and most expensive to implement.  
  - Many systems instead combine **at-least-once delivery with idempotent consumers**.  

---

### 3. Event Sourcing and Replay
Do you need to **rebuild system state** or **replay past events**?

- **Without event sourcing** → events are temporary, only final state is kept.  
- **With event sourcing** → all events are stored permanently and treated as the **source of truth**.  

**Some solutions:**
- Use an **immutable event log** (like Kafka). Consumers can rebuild state by replaying it.  
- Use **snapshots** to save state periodically, so replaying requires fewer events.  

**Benefits**: Easier debugging, auditing, system recovery, and feeding new systems from existing data.  

---

### 4. Backpressure Handling
What happens if producers generate data **faster than consumers can handle it**?
If unmanaged, this can cause **dropped messages, memory issues, or system crashes**.  

**Some solutions:**
- Scale consumers to process faster.  
- Scale the pipeline to handle higher load.  
- Reduce producer publishing rate (based on buffer config and consumer rate).  
- Allow event drops (configured at pipeline level, if capacity is exceeded).  
- Scale producers up or down based on consumer feedback/status.  

**Tradeoff**: Always plan for slow consumers.  
- **Unbounded queues** are risky.  
- **Bounded queues with fallback mechanisms** are safer.  

