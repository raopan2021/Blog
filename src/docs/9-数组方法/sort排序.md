# SORT排序

<a href="https://juejin.cn/post/7129112563647774733" target="_blank">原链接</a>

```js
// 一维简单数组
names.sort();

// 一维对象数组
users.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
```

现在让我们来了解一下我们是如何得出这两种解决方案的。

## 如何按字母顺序对一个名字数组进行排序

假设我们有一个名字的数组：

```ini
let names  = ["John Doe", "Alex Doe", "Peter Doe", "Elon Doe"];

```

我们可以用`sort()` 方法对这些名字按字母排序：

```ini
let sortedNames = names.sort();
console.log(sortedNames);

```

这将返回一个按字母排序的名字数组：

```css
["Alex Doe","Elon Doe","John Doe","Peter Doe"]

```

**注意**：当一些名字以大写字母开头，而另一些以小写字母开头时，输出结果将是不正确的，因为`sort()` 方法将大写字母放在小写字母之前：

```ini
let names = ["John Doe", "alex Doe", "peter Doe", "Elon Doe"];
let sortedNames = names.sort();

console.log(sortedNames); // ["Elon Doe","John Doe","alex Doe","peter Doe"]

```

所以你需要确保这些词的大小写都是一样的，否则它就不能按照我们的愿望按字母顺序返回名字。

在现实世界中，我们可能有一个用户数组，每个用户的信息都在一个对象中。这些信息可以是任何与用户名称有关的信息。比如说：

```ini
let users = [
  {
    name: "John Doe",
    age: 17
  },
  {
    name: "Elon Doe",
    age: 27
  },
  {
    name: "Alex Doe",
    age: 14
  }
];

```

看一下上面的对象，之前的方法中，我们只是在数组上直接应用`sort()` 方法，将无法工作。相反，它将抛出相同的数组，但项目不会按照我们想要的顺序排列。

我们将在比较函数旁边使用`sort()` 方法来按名字排列这个用户数组。

我们将使用比较函数来定义一个替代的排序顺序。根据参数的不同，它返回一个负值、零值或正值：

语法：

```css
function(a, b){return a - b}

```

当我们把这个比较函数传入`sort()` 方法时，它根据我们设定的条件对每个值进行比较，然后根据返回的值（负值、零值、正值）对每个名字进行排序：

- 如果结果是负的，`a` 被排序到`b` 之前。
- 如果结果是正数，`b` 被排序在`a'之前。
- 如果结果是`0` ，则不会对这两个值的排序顺序做任何改变。

使用上面的例子，我们现在可以这样在比较函数旁边使用`sort()` 方法：

```lua
users.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

console.log(users);

```

上面的代码对每个名字进行比较。如果它大，它返回1。如果它小于，则返回-1。返回的值用于按字母顺序排列我们数组的值：

```yaml
[
  {
    name: "Alex Doe",
    age: 14
  },
  {
    name: "Elon Doe",
    age: 27
  },
  {
    name: "John Doe",
    age: 17
  }
]

```

**注意**：就像我们之前看到的，这总是根据字母的大小写工作，并将大写字母排在小写字母之前：

```ini
let users = [
  {
    name: "alex Doe",
    age: 14
  },
  {
    name: "Elon Doe",
    age: 27
  },
  {
    name: "John Doe",
    age: 17
  }
];
    
users.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

console.log(users);

```

输出：

```yaml
[
  {
    name: "Elon Doe",
    age: 27
  },
  {
    name: "John Doe",
    age: 17
  },
  {
    name: "alex Doe",
    age: 14
  }
]

```

## 总结

在这篇文章中，你已经学会了如何在两种可能的情况下使用`sort()` 方法按字母顺序排列一个数组。

在名字有不同字母大小写的情况下，最好在使用`sort()` 方法之前先将它们转换为特定的字母大小写。

编码愉快!