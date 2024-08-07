//QUESTION NO-1:-

//TO PRINT ODD NUMBER BY USING ANONYMOUS FUNCTION:-

var to_print_odd_number = function (arr) {
    var result = [];
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  console.log(to_print_odd_number([13, 27, 42, 98, 101, 123]));
  
  //TO PRINT ODD NUMBER BY USING IIFE FUNCTION:-
  
  (function to_print_odd_number(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        result.push(arr[i]);
      }
    }
    console.log(result);
  })([13, 27, 42, 98, 101, 123]);
  
  //------------------------------------------------------------------------------------------------------
  
  //QUESTION NO-2:-
  
  //SUM OF ALL NUMBER IN AN ARRAY BY USING ANONYMOUS FUNCTION:-
  
  var sum = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  };
  console.log(sum([2, 5, 8, 4, 6, 3]));
  
  //SUM OF ALL NUMBER IN AN ARRAY BY USING IIFE FUNCTION:-
  
  (function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    console.log(sum);
  })([2, 5, 8, 4, 6, 3]);
  
  //--------------------------------------------------------------------------------------------------------
  
  //QUESTION NO-3:-
  
  //RETURN ALL THE PRIME NUMBERS IN AN ARRAY BY USING ANONYMOUS FUNCTION:-
  
  var prime_number = function (arr) {
    var prime = true;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0 && arr[i] != 2) {
        prime = false;
      }
      if (prime == true) {
        console.log(`${arr[i]} is a prime number`);
      } else {
        console.log(`${arr[i]} is not a prime number`);
      }
    }
  };
  console.log(prime_number([3, 5, 1, 2, 4, 8, 12, 14, 15, 18]))
  
  
  //RETURN ALL THE PRIME NUMBERS IN AN ARRAY BY USING IIFE FUNCTION:-
  
    (function prime_number(arr) {
      var prime = true;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] != 2) {
          prime = false;
        }
        if (prime == true) {
          console.log(`${arr[i]} is a prime number`);
        } else {
          console.log(`${arr[i]} is not a prime number`);
        }
      }
    }
  )([3, 5, 1, 2, 4, 8, 12, 14, 15, 18]);
  
  //--------------------------------------------------------------------------------------------------------
  
  //QUESTION NO-4:-
  
  //RETURNS ALL THE PALINDROMES IN AN ARRAY BY USING ANONYMOUS FUNCTION:-
  
  var palindrome = function (arr) {
    var a = arr[0].split("");
    var b = a.reverse();
    if (a === b) {
      return b;
    }
  };
  console.log(palindrome(["MALAYALAM"]));
  
  //RETURNS ALL THE PALINDROMES IN AN ARRAY BY USING IIFE FUNCTION:-
  
  (function palindrome(arr) {
    var result = [];
    var a = arr[0].split("");
    var b = a.reverse();
    var c = b.join("");
    result.push(c);
    if (arr[0] === result[0]) {
      console.log(result);
    }
  })(["MALAYALAM"]);
  
  
  //--------------------------------------------------------------------------------------------------------
  
  //QUESTION NO-5:-
  
  //REMOVE DUPLICATES FROM AN ARRAY BY USING ANONYMOUS FUNCTION:-
  
  var duplicates = function (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (!result.includes(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  console.log(duplicates([1, 3, 5, 1, 3, 6, 8, 6]))
  
    //REMOVE DUPLICATES FROM AN ARRAY BY USING IIFE FUNCTION:-
  
    (function duplicates(arr) {
      var result = [];
      for (var i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
          result.push(arr[i]);
        }
      }
      console.log(result);
    }
  )([1, 3, 5, 1, 3, 6, 8, 6]);
  
  
  //--------------------------------------------------------------------------------------------------------
  
  //QUESTION NO-6:-
  
  //CONVERT ALL THE STRINGS TO TITLE CAPS IN A STRING ARRAY BY USING ANONYMOUS FUNCTION:-
  
  var Titlecaps = function (arr) {
    var a = arr[0].toLowerCase();
    var b = a.split(" ");
    var result = [];
  
    for (var i = 0; i < b.length; i++) {
      result.push(b[i][0].toUpperCase() + b[i].slice(1));
    }
  
    return result.join(" ");
  };
  console.log(Titlecaps(["CONVERT THIS STRING INTO TITLE CAPS"]));
  
  //CONVERT ALL THE STRINGS TO TITLE CAPS IN A STRING ARRAY BY USING IIFE FUNCTIONS:-
  
  (function Titlecaps(arr) {
    var a = arr[0].toLowerCase();
    var b = a.split(" ");
    var result = [];
  
    for (var i = 0; i < b.length; i++) {
      result.push(b[i][0].toUpperCase() + b[i].slice(1));
    }
  
    console.log(result.join(" "));
  })(["CONVERT THIS STRING INTO TITLE CAPS"]);
  
  
  //--------------------------------------------------------------------------------------------------------
  
  //QUESTION NO-7:-
  
  //RETURN MEDIAN OF TWO SORTED ARRAYS OF THE SAME SIZE BY USING ANONYMOUS FUNCTION:-
  
  var median = function (arr1, arr2) {
    var a = arr1.concat(arr2);
    var b1 = arr1.length / 2;
    var ans1 = Math.ceil(b1);
    var b2 = arr2.length / 2;
    var ans2 = Math.ceil(b2);
    return (arr1[ans1] + arr2[ans2]) / 2;
  };
  console.log(median([12, 14, 16, 18, 20], [22, 24, 25, 26, 28]));
  
  //RETURN MEDIAN OF TWO SORTED ARRAYS OF THE SAME SIZE BY USING IIFE FUNCTION:-
  
  (function (arr1, arr2) {
    var a = arr1.concat(arr2);
    var b1 = arr1.length / 2;
    var ans1 = Math.ceil(b1);
    var b2 = arr2.length / 2;
    var ans2 = Math.ceil(b2);
    console.log((arr1[ans1] + arr2[ans2]) / 2);
  })([12, 14, 16, 18, 20], [22, 24, 25, 26, 28]);
  
  //-------------------------------------------------------------------------------------------------------
  
  //QUESTION NO-8:-
  
  //ROTATE AN ARRAY BY K TIMES BY USING ANONYMOUS FUNCTION:-
  
  var arr = [12, 14, 16, 18, 20, 21, 22];
  var length = arr.length;
  var times = 2;
  var Rotatearray = function (arr, times, length) {
    var temp = new Array(length);
    let k = 0;
    for (let i = times; i < length; i++) {
      temp[k] = arr[i];
      k++;
    }
    for (let i = 0; i < times; i++) {
      temp[k] = arr[i];
      k++;
    }
    for (let i = 0; i < length; i++) {
      console.log(temp[i] + " ");
    }
  };
  Rotatearray(arr, times, length);
  
  //ROTATE AN ARRAY BY K TIMES BY USING IIFE FUNCTION:-
  
  (function Rotatearray(arr, times, length) {
    var temp = new Array(length);
    let k = 0;
    for (let i = times; i < length; i++) {
      temp[k] = arr[i];
      k++;
    }
    for (let i = 0; i < times; i++) {
      temp[k] = arr[i];
      k++;
    }
    for (let i = 0; i < length; i++) {
      console.log(temp[i] + " ");
    }
  })([12, 14, 16, 18, 20, 21, 22], 2, 7);
  
  //--------------------------------------------------------------------------------------------------------
  
  //BY USING ARROW FUNCTIONS:-
  
  //QUESTION NO-1:-
  
  //TO PRINT ODD NUMBER BY USING ARROW FUNCTION:-
  
  var to_print_odd_number = (arr) => {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  console.log(to_print_odd_number([15, 52, 67, 89, 42, 78]));
  
  //--------------------------------------------------------------------------------------------------------
  
  //QUESTION NO-2:-
  
  //SUM OF ALL NUMBER IN AN ARRAY BY USING ARROW FUNCTION:-
  
  var sum = (arr) => {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  };
  console.log(sum([25, 45, 15, 78, 65]));
  
  //----------------------------------------------------------------------------------------------------------
  
  //QUESTION NO-3:-
  
  //RETURN ALL THE PRIME NUMBERS IN AN ARRAY BY USING ARROW FUNCTION:-
  
  var prime_number = (arr) => {
    var prime = true;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0 && arr[i] != 2) {
        prime = false;
      }
      if (prime == true) {
        console.log(`${arr[i]} is a prime number`);
      } else {
        console.log(`${arr[i]} is not a prime number`);
      }
    }
  };
  console.log(prime_number([3, 5, 2, 4, 8, 10]));
  
  //----------------------------------------------------------------------------------------------------------
  
  //QUESTION NO-4:-
  
  ////RETURNS ALL THE PALINDROMES IN AN ARRAY BY USING ARROW FUNCTION:-
  
  var palindrome = (arr) => {
    var a = arr[0].split("");
    var b = a.reverse();
    if (a === b) {
      return b;
    }
  };
  console.log(palindrome(["13231"]));
  
  //----------------------------------------------------------------------------------------------------------
  
  //QUESTION NO-5:-
  
  //CONVERT ALL THE STRINGS TO TITLE CAPS IN A STRING ARRAY BY USING ARROW FUNCTION:-
  
  var Titlecaps = (arr) => {
    var a = arr[0].toLowerCase();
    var b = a.split(" ");
    var result = [];
  
    for (var i = 0; i < b.length; i++) {
      result.push(b[i][0].toUpperCase() + b[i].slice(1));
    }
  
    return result.join(" ");
  };
  console.log(Titlecaps(["WELCOME TO MY WORLD"]));
  
  
  //----------------------------------------------------------------------------------------------------------