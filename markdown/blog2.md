
Let’s start with a problem or use case first.

At every transaction db write, we want to send a change event to Kafka for some of our use cases. The event in Kafka can be used for many other features like data warehouse, notification, analytics etc.

This in general is called dual write.

***What’s the problem before this pattern?***

Support your service ( backend application ) is running as Kubernetes pods, you did the transaction successfully to db and immediately your pods go down for any reason. Now how would you send the change event into Kafka now? And our database stores only updated events. ( Latest value of the row ).

Now you understand the problem.

***How do solve this problem?***

That’s where the transaction outbox pattern comes in.

Let’s understand this with an example. Suppose

We have a user table, which contains **user_id**, **name**, and **updated_on (time)** as columns in our table ( Normal table ).

Now because of some activity, this user’s name is updated, as a result, the value of column **name** and **updated_on** is also updated to latest value.

Now we want to capture this event. ( Now read carefully ).

Imagine what if we create another table which is called let say **user_updated_outbox**, which append only the change data . Means it will have two entry of same user_id after this.

And let both these write happen in transaction. So either both will happen or none of them.

Now think about our problem again, what if pods go down.

Hmm but we are safe now since we have data in table. ( Or there can be case , it failed before transaction complete. This is also good for us. Since we can say we have n’t save data yet. How can we have event in kafka :D )

We can now connect our kafka with outbox table and it can read change events from it.

![Mady by manvirag](https://cdn-images-1.medium.com/max/2844/1*kLuHOH-76HbkTYKOj6z-fw.png)*Mady by manvirag*

There are multiple implementations of doing this , though we are not going the details of them in this article.

This was my attempts to talk about this pattern in very simple ways.

Let me know if any doubts or something to discuss about in comment section.

Thanks.

### Be humble. Be fearless. Be yourself. Remember, everyone, regardless of their greatness, beauty, arrogance, judgement etc., will eventually face mortality.

#softwareengineering #backend
