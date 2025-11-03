function greet() {
  return `Hi We Found Your :\n\tName : ${person.name}\n\tAge : ${person.age}\n\tAddress : ${person.address}`;
}

const person = {
  name: "Akash",
  age: 23,
  address: "New Delhi",
  greet,
};

console.log(person.greet());

//we can do this instead
const person2 = {
  username: "Akash Singh",
  age: 23,
  address: "New Delhi",
  greet2: function () {
    return `Hello, This Is A New Function Call\n${person2.username}\n${person2.age}\n${person2.address}`;
  },
};

//Example of Sample JSON
const SampleJson = {
  username: "user123",
  email: "user123@example.com",
  preferences: {
    theme: "dark",
    notifications: true,
    language: "en",
  },
  isSubscribed: true,
  subscriptionPlan: "premium",
  hobbies: ["reading", "gaming", "coding"],
  age: 28,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

// Json Stringify
const jsonString = JSON.stringify(SampleJson);
//parse the json string
const parseObject = JSON.parse(jsonString);
console.log(parseObject);
