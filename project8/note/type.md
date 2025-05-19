এখানে আমরা একটি বিষয় লক্ষ্য করছি যে এখানে `Card.jsx` ফাইলে আমরা `type ? <button className='button'>{buttonText}</button>: ""` এমন লেখার পরে এখানে type এর মান `type="false"` দেওয়ার পরে বাটন দেখায় 

#### `type="false"` দেওয়ার পরে বাটন দেখার এবং না দেখার কারণ আপনার `Card` কম্পোনেন্টে `type` প্রপস কিভাবে ব্যবহার করা হচ্ছে তার উপর নির্ভর করে।

**সম্ভাব্য কারণ:**

1. `type` প্রপস একটি স্ট্রিং হিসেবে পাস হচ্ছে। React-এ প্রপসগুলিকে ডিফল্ট হিসেবে স্ট্রিং ধরে নেয়। তাই `type="true"` এবং `type="false"` আসলে যথাক্রমে `"true"` এবং `"false"` স্ট্রিং হিসেবে যাচ্ছিল।
2. `Card` কম্পোনেন্টে `type` প্রপসটি যদি সরাসরি শর্তাধীন লজিকে ব্যবহার করা হয়, তবে JavaScript-এ `type="false"` স্ট্রিংটি সত্য (truthy) ধরা হবে। উদাহরণস্বরূপ:

```jsx
if (type) {
  // এটি চলবে যদি type="false" হয় কারণ এটি স্ট্রিং, আর স্ট্রিং truthy।
}
```

3. যদি `type` প্রপসটি বাটন দেখানো/লুকানোর জন্য ব্যবহৃত হয়, তবে `type="false"` থাকলেও বাটন দেখা যাবে, কারণ এটি truthy।

---

### সমাধান

যদি আপনি `type` প্রপসটি প্রকৃত বুলিয়ান (`true`/`false`) হিসেবে কাজ করাতে চান, তবে এটি সঠিকভাবে পাস করতে হবে। উদাহরণস্বরূপ:

#### ১. বুলিয়ান হিসেবে পাস করুন:

```jsx
<Card design="main designFive" title="This is Five" text="..." buttonText="This is Five" type={false} />
```

এখানে `{false}` ব্যবহার করলে এটি প্রকৃত বুলিয়ান হবে।

#### ২. `Card` কম্পোনেন্টে শর্তাধীন লজিক ঠিক করুন:

`Card` কম্পোনেন্টে `type` প্রপসটি কিভাবে ব্যবহৃত হচ্ছে তা দেখুন। উদাহরণ:

```jsx
const Card = ({ design, title, text, buttonText, type }) => {
  return (
    <div className={design}>
      <h2>{title}</h2>
      <p>{text}</p>
      {type && <button>{buttonText}</button>}
    </div>
  );
};
```

এখানে `type &&` চেক করছে যে `type` সত্য হলে কেবল বাটন দেখাবে।

#### ৩. ডিফল্ট ভ্যালু নিশ্চিত করুন:

`Card` কম্পোনেন্টে `type` এর ডিফল্ট ভ্যালু সেট করুন যদি প্রপস পাস করা না হয়:

```jsx
Card.defaultProps = {
  type: true, // ডিফল্টভাবে বাটন দেখাবে
};
```

---

### উদাহরণ

আপনার কোডটি আপডেট করার পরে এমন দেখাবে:

```jsx
<Card design="main designFive" title="This is Five" text="..." buttonText="This is Five" type={false} />
<Card design="main designFour" title="This is Four" text="..." buttonText="This is Four" type={true} />
```

এবং `Card` কম্পোনেন্টে:

```jsx
const Card = ({ design, title, text, buttonText, type }) => {
  return (
    <div className={design}>
      <h2>{title}</h2>
      <p>{text}</p>
      {type && <button>{buttonText}</button>}
    </div>
  );
};
```

এতে আপনার বাটন সঠিকভাবে শর্ত অনুযায়ী দেখানো বা লুকানো হবে।
### আবার type নামে কিছুই না পাঠালে বার্টন আসে না কেন।
আপনার প্রশ্নের মূল কারণ হচ্ছে JavaScript এবং React-এ `undefined` বা `false` এর আচরণ। আপনি যদি `type` প্রপস না পাঠান, তবে এটি React কম্পোনেন্টে `undefined` হিসাবে গণ্য হয়। শর্তাধীন লজিক অনুযায়ী, `undefined` হলো falsy, তাই এটি কার্যকর হয় না এবং বাটন দেখায় না।

### বিস্তারিত বিশ্লেষণ

যদি `type` প্রপস না পাঠানো হয়, React কম্পোনেন্টে `type` এর ডিফল্ট মান `undefined` থাকে। উদাহরণস্বরূপ:

```jsx
<Card design="main designFive" title="This is Five" text="..." buttonText="This is Five" />
```

এক্ষেত্রে, যদি আপনার `Card` কম্পোনেন্টে নিচের মতো শর্ত লেখা থাকে:

```jsx
{type && <button>{buttonText}</button>}
```

এটি `type` এর মান `undefined` হলে `false` হিসাবে বিবেচিত হবে, তাই বাটন রেন্ডার হবে না।

### সমাধান

আপনার চাহিদা অনুযায়ী যদি `type` প্রপস না পাঠানো হলেও বাটন দেখাতে চান, তবে `type` এর ডিফল্ট মান `true` সেট করতে হবে।

#### ১. ডিফল্ট প্রপস ব্যবহার করে:

React কম্পোনেন্টে ডিফল্ট প্রপস সেট করুন:

```jsx
const Card = ({ design, title, text, buttonText, type = true }) => {
  return (
    <div className={design}>
      <h2>{title}</h2>
      <p>{text}</p>
      {type && <button>{buttonText}</button>}
    </div>
  );
};
```

এখানে `type = true` সেট করা হয়েছে, তাই আপনি `type` না পাঠালেও এটি `true` হিসেবে গণ্য হবে এবং বাটন দেখাবে।

#### ২. ডিফল্ট প্রপস আলাদাভাবে ডিফাইন করুন:

React-এর `defaultProps` পদ্ধতি ব্যবহার করুন (ফাংশনাল কম্পোনেন্টের জন্য):

```jsx
Card.defaultProps = {
  type: true, // যদি type না পাঠানো হয়, ডিফল্ট মান true হবে।
};
```

#### ৩. শর্তটি আরো নমনীয় করুন:

আপনি শর্তে `type` না পাঠানোর বিষয়টি আলাদাভাবে চেক করতে পারেন:

```jsx
{type !== false && <button>{buttonText}</button>}
```

এটি শুধুমাত্র তখন বাটন দেখাবে না, যখন `type` স্পষ্টভাবে `false` সেট করা থাকে। অন্য যেকোনো অবস্থা (যেমন `undefined`, `true`) হলে বাটন দেখাবে।

---

### চূড়ান্ত কোড

আপনার `Card` কম্পোনেন্ট এভাবে সাজানো যেতে পারে:

```jsx
const Card = ({ design, title, text, buttonText, type = true }) => {
  return (
    <div className={design}>
      <h2>{title}</h2>
      <p>{text}</p>
      {type && <button>{buttonText}</button>}
    </div>
  );
};

export default Card;
```

এবং ব্যবহার:

```jsx
<Card design="main" title="This is One" text="..." buttonText="This is One" />
<Card design="main designFive" title="This is Five" text="..." buttonText="This is Five" type={false} />
<Card design="main designFour" title="This is Four" text="..." buttonText="This is Four" />
```

### ফলাফল

1. `type` না পাঠালে বাটন দেখাবে কারণ ডিফল্ট মান `true`।
2. `type={false}` পাঠালে বাটন দেখাবে না।
3. `type={true}` বা `type` পাস করলে বাটন দেখাবে।
