console.clear();

//Q1
function twoSum(nums, target_num) {
  var map = [];
  var indexnum = [];
  
  for (var x = 0; x < nums.length; x++)
  {
  if (map[nums[x]] != null)
  {
  index = map[nums[x]];
  indexnum[0] = index;
  indexnum[1] = x;
  break;
  }
  else
  {
  map[target_num - nums[x]] = x;
  }
  }
  return indexnum;
  }

console.log(twoSum([10,20,10,40,50,60,70],20));

//Q2
let a = [1,2,3,4];

function reverseArray(a){
  return a.reverse()
};

console.log(reverseArray(a));

//Q3
function areRotations( str1,  str2)
    {
        return (str1.length == str2.length) &&
               ((str1 + str1).indexOf(str2) != -1);
    }
        var str1 = "ABCD";
        var str2 = "CDAB";
          if (areRotations(str1, str2))
            console.log("Strings are rotations of each other");
        else
            console.log("Strings are not rotations of each other");

//Q4
function nonRepeated(str) {
   for(let i = 0; i < str.length; i++) {
      let j = str.charAt(i)
      if (str.indexOf(j) == str.lastIndexOf(j)) {
        return j;
      }
   }
   return null;
}

console.log(nonRepeated("aabccd"));

//Q5
function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
{
        if (n == 0)
        {
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
       console.log("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod);
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
    }
    var N = 2;
    towerOfHanoi(N, 'A', 'C', 'B');

//Q6
function isOperator(x)
    {
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
    function preToPost(pre_exp)
    {
  
        let s = [];
        let length = pre_exp.length;
  
        for (let i = length - 1; i >= 0; i--)
        {
          if (isOperator(pre_exp[i]))
            {
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
                let temp = op1 + op2 + pre_exp[i];
                s.push(temp);
            }
            else {
                s.push(pre_exp[i] + "");
            }
        }
        return s[s.length - 1];
    }
     
    let pre_exp = "*-A/BC-/AKL";
    console.log("Postfix : " + preToPost(pre_exp));

//Q7
function isOperator(x)
    {
        switch(x)
        {
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
            case '%':
                return true;
        }
        return false;
    }

    function convert(str)
    {
        let stack = [];
 
        let l = str.length;
 
        for(let i = l - 1; i >= 0; i--)
        {
            let c = str[i];
 
            if (isOperator(c))
            {
                let op1 = stack[stack.length - 1];
                stack.pop()
                let op2 = stack[stack.length - 1];
                stack.pop()
 
                let temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            }
            else
            {
                stack.push(c + "");
            }
        }
        return stack[stack.length - 1];
    }
     
    let exp = "*-A/BC-/AKL";
      
    console.log("Infix : " + convert(exp));
    
     
//Q8

function areBracketsBalanced(expr)
{
    let stack = [];

    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
            stack.push(x);
            continue;
        }
 
        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
    return (stack.length == 0);
}
 
let expr = "([{}])";
let expr1 = "[({})"
if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");

if (areBracketsBalanced(expr1))
    console.log("Balanced ");
else
    console.log("Not Balanced ");
 
//Q9

let st = [];
function insert_at_bottom(x){
    if(st.length==0)
        st.push(x);
    else{
      let a = st.pop();
      insert_at_bottom(x);
      st.push(a);
    }
 }
function reverse(){
    if(st.length > 0){
          let x = st.pop();
          reverse();
         insert_at_bottom(x);
        }
}
st.push('1');
st.push('2');
st.push('3');
st.push('4');
 
console.log("Original Stack");
console.log(st.join(" "));
reverse();
 
console.log("Reversed Stack");
console.log(st.join(" "));

//Q10

let Max = 5;
let arr = new Array(Max);
let minEle = 0;
let Top = 0;
    
function empty(){
        if (Top <= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    function push(x){
        if (empty()) {
            minEle = x;
           arr[Top] = x;
           Top++;
        }else if (Top == Max) {
          Max = 2 * Max;
         let temp = new Array(Max);
         for (let i = 0; i < Top; i++) {
                temp[i] = arr[i];
            }
            if (x < minEle) {
                temp[Top] = 2 * x - minEle;
                minEle = x;
                Top++;
            }else {
                temp[Top] = x;
                Top++;
            }   arr = temp;
        } else {
            if (x < minEle) {
                arr[Top] = 2 * x - minEle;
                Top++;
                minEle = x;
            }else {
              arr[Top] = x;
              Top++;
            }
        }
    }
   
    function pop() {
        if (empty()) {
            console.log("Underflow");
            return;
        }
        let t = arr[Top - 1];
   
        if (t < minEle) {
         console.log("Popped element : " + minEle);
            minEle = 2 * minEle - t;
        } else {
          console.log("Popped element : " + t);
        }
        Top--;
        return;
    }
    function peek()
    {
        if (empty()) {
            console.log("Underflow");
            return -1;
        }
        let t = arr[Top - 1];
        if (t < minEle) {
            return minEle;
        }else {
            return t;
        }
    }
    function getMin()
    {
        if (empty()) {
            console.log("Underflow");
            return -1;
        }
        else {
            return minEle;
        }
    }
    
    push(10);
    push(4);
    push(9);
    push(6);
    push(5);
   
    console.log("Top Element : " + peek());
   
    console.log("Minimum Element : " + getMin());
   
    pop();
    pop();
    pop();
    pop();
   
    console.log("Top Element : " + peek());
    console.log("Minimum Element : " + getMin());
